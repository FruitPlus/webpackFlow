const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkgInfo = require('./package.json')
const glob = require('glob')


const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
 
// Create multiple instances 
const extractLESS = new ExtractTextPlugin('style/[name]-two.css?[hash]');


module.exports = (options = {}) => {
  const config = require('./config/' + (process.env.npm_config_config || options.config || 'default'))

  const entries = glob.sync('./src/**/index.js')

  const entryJsList = {}
  const entryHtmlList = []
  for (const path of entries) {
    const chunkName = path.slice('./src/pages/'.length, -'/index.js'.length);
    entryJsList[chunkName] = path
    entryHtmlList.push(new HtmlWebpackPlugin({
      template: path.replace('index.js', 'index.html'),
      filename: chunkName + '.html',
      chunks: ['manifest', 'vendor', chunkName]
    }))
  }

  return {
    entry: Object.assign({
      vendor: './src/vendor'
    }, entryJsList),

    output: {
      path: resolve(__dirname, 'dist'),
      filename: options.dev ? 'js/[name].js' : 'js/[name].js?[chunkhash]',
      chunkFilename: 'js/[id].js?[chunkhash]'
    },

    module: {
      rules: [
      {test: require.resolve("jquery"), use: "expose-loader?$"},
      {test: require.resolve("jquery"), use: "expose-loader?jQuery"},
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        { test: /\.ejs$/, use: 'ejs-loader?variable=data' },
        { test: /\.hbs/, use: 'handlebars-loader' },
        {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                root: resolve(__dirname, 'src'),
                attrs: ['img:src', 'link:href']
              }
            }
          ]
        },

        {
          test: /\.less$/,
          use: extractLESS.extract([ 'css-loader', 'less-loader' ])
        },
        {
          test: /\.css$/,
          use: extractLESS.extract([ 'css-loader', 'less-loader' ])
        },

        {
          test: /favicon\.png$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]?[hash]'
              }
            }
          ]
        },

        {
          test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
          exclude: /favicon\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name :'images/[name][hash:8].[ext]'
              }
            }
          ]
        },

      ]
    },

    plugins: [
      new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8100/'
          }),
      ...entryHtmlList,
      extractLESS,
      new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery",
           'window.jQuery': 'jquery',
           'window.$': 'jquery',
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),

      new webpack.DefinePlugin({
        DEBUG: Boolean(options.dev),
        VERSION: JSON.stringify(pkgInfo.version),
        CONFIG: JSON.stringify(config.runtimeConfig)
      })

    ],

    resolve: {
      alias: {
        '~': resolve(__dirname, 'src'),
        'components': resolve(__dirname, './src/components'),
        'pages': resolve(__dirname, './src/pages')
      }
    },

    devServer: config.devServer ? {
      port: config.devServer.port,
      proxy: config.devServer.proxy
    } : undefined,

    performance: {
      hints: options.dev ? false : 'warning'
    }
  }
}

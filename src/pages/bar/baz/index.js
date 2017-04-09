// import template from './index.html'
import './style.css'
import $ from 'jquery'
// export default class {
//   mount(container) {
//     document.title = 'baz'
//     container.innerHTML = template
//   }
// }


console.log('baz')
	$('body').click(function(){
		console.log('clcllc')
		import('~/components/dialog/index.js').then(module => {
		   // export default ... 的内容通过module.default访问
		   const View = module;
		   console.log(View);
		 })

	})
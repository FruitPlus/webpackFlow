
import './dialog.less';
var dialogTpl = require('./dialog.hbs');


var dialog = dialogTpl();

var $dialog = $(dialog);


$dialog.click(function(){
	console.log('dialog')
})
$dialog.find('p').click(function(){
	var $this = $(this);
	console.log($this.text())
})

module.exports = $dialog;
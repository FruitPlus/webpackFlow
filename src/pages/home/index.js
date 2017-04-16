console.log('我是ｈｏｍｅ')




import 'components/slider/style.less';
import easyTab from 'components/easyTab';
import UI from 'components/slider/slider.js'
import dialog from 'components/Dialog/dialog.js';




var user = $('#users')
var names = ['mike','amy','candy']
var homeTpl = require("../test.hbs");
var homeHtml = homeTpl({'name':'mike'});

console.log(homeHtml)
// console.log(homeTpl)
// var html= ejs.render(user,{names:names});

$('body').append(dialog)



var oTestTab = new easyTab('easyTab');
oTestTab.init();



$(function($){
	console.log('ready')
	$('#demo1').slideBox();
	$.ajax({
		url: 'http://rapapi.org/mockjsdata/17123/collectJob.json',
	})
	.done(function(data) {
		console.log(data)
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});

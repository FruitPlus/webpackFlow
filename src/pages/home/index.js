console.log('我是ｈｏｍｅ')




import 'components/slider/style.less';
import easyTab from 'components/easyTab';
import UI from 'components/slider/slider.js'



var oTestTab = new easyTab('easyTab');
oTestTab.init();



$(function($){
	console.log('ready')
	$('#demo1').slideBox();

});

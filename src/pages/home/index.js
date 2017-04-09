/* eslint no-console: "off" */

// import $ from 'jquery'
// import jQuery from 'jquery'
import './style.css'
import UI from '~/components/slider/slider.js'
import '~/components/slider/style.css'



import easyTab from '~/components/easyTab';


	var oTestTab = new easyTab('easyTab');
	oTestTab.init();

$(function($){
	console.log($.fn)
	// console.log(UI)
	$('#demo1').slideBox();

});


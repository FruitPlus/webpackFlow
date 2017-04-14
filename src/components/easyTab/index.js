/* eslint no-console: "off" */

// import $ from 'jquery'

// import Dialog from '../dialog'

import './style.css'

;(function(){
	function easyTab(id){
		this.easyTab = $('#'+id);
		this.tabBtn = this.easyTab.find('.easyTab>li');
		this.tabContentBox = this.easyTab.find('.tabBox>div');


	}

	easyTab.prototype.bindEvent = function(){
		let This = this;
		let tabIdx = 0;
		this.tabBtn.click(function(){
			var $this = $(this);
			tabIdx = This.tabBtn.index($this);
			$this.siblings('li').removeClass('active');
			$this.addClass('active');
			$(This.tabContentBox[tabIdx]).siblings('div').removeClass('active');
			$(This.tabContentBox[tabIdx]).addClass('active');

		})
		this.tabContentBox.click(function(){
			console.log('okok');
			let oTest= new Dialog();
			oTest.init();


		})
	}

	easyTab.prototype.init =function(){
		this.bindEvent();
	}
	// var oTestTab = new easyTab('easyTab');
	// oTestTab.init();
	module.exports = easyTab;
})();




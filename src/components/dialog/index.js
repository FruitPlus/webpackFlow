import $ from 'jquery';
import './style.css';


;(function(){
	function Dialog(){
		
	}

	Dialog.prototype.bindEvent = function(){
		$('.dialog').find('.close').click(function(){
			$(this).parent().parent().remove()
		})
	}
	Dialog.prototype.renderHtml= function(){
		$('body').append('      <div class = "dialog">'+
'        <h4><span class = "close">×</span></h4>'+
'      </div>');
	}
	Dialog.prototype.init = function(){
		this.renderHtml();
		this.bindEvent();
	}
	module.exports = Dialog;

})()
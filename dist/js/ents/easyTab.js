webpackJsonp([3],[,function(t,i,n){"use strict";(function(i){n(2),function(){function n(t){this.easyTab=i("#"+t),this.tabBtn=this.easyTab.find(".easyTab>li"),this.tabContentBox=this.easyTab.find(".tabBox>div")}n.prototype.bindEvent=function(){var t=this,n=0;this.tabBtn.click(function(){var o=i(this);n=t.tabBtn.index(o),o.siblings("li").removeClass("active"),o.addClass("active"),i(t.tabContentBox[n]).siblings("div").removeClass("active"),i(t.tabContentBox[n]).addClass("active")}),this.tabContentBox.click(function(){console.log("okok"),(new Dialog).init()})},n.prototype.init=function(){this.bindEvent()},t.exports=n}()}).call(i,n(0))},function(t,i){}],[1]);
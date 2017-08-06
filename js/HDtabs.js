(function($){
	$.fn.HDtabs=function(settings){
		settings=jQuery.extend({
			"time":300//多少秒后执行移动
		},settings)
		$.fn.HDtabs.show($(this),settings);
	};
	$.fn.HDtabs.show=function($this,settings){
		/*定义定时器*/
		var t='';
		/*鼠标移入，开始定时器*/
		$this.children('.md-tabs').children('li').mouseover(function(){
			var _this=$(this);
			/**/
			t=setTimeout(function(){
				$this.children('.md-tabs').children('li').removeClass('hover');//移除所有
				_this.addClass('hover');//加上当前
				$this.children('.md-content').children('div').hide();//隐藏所有
				$this.children('.md-content').children('div').eq(_this.index()).show();//显示当前
			},settings.time);
		});
		/**/
		$this.children('.md-tabs').children('li').mouseout(function(){
			clearTimeout(t);//清除定时器
		});
	}
})(jQuery)

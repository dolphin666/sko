$(function(){
	//导航下拉
	var $subNav = $(".ins-nav");
	// var $subNavli = $("header .nav-link .sub-menu .boxs");
	var $subNavli = $(".ins-nav ul");
	var $navLi = $("header .nav-link .nav li.sub-li");
	$navLi.hover(function() {
		// var navliIndex = $(this).index();
		// if ($(this).index() == 0) {
		// 	navliIndex = 0;
		// }else if ($(this).index() == 2){
		// 	navliIndex = 1;
		// }
		// $subNav.stop(true,true).show();
		// $subNavli.eq(navliIndex).stop(true,true).show();
		// $subNavli.eq(navliIndex).siblings('.boxs').stop(true,true).hide();
		$(this).addClass('cur').siblings('li').removeClass('cur');
		$(this).children('.sub-nav').stop().slideDown();
	},function(){
		// var navliIndex = $(this).index();
		// $subNavli.eq(navliIndex).stop(true,true).hide();
		// $subNav.stop(true,true).hide();
		// $subNavli.stop(true,true).hide();
		$(this).removeClass('cur');
		$(this).children('.sub-nav').stop().slideUp();
	});
	// $subNavli.hover(function() {
	// 	var navliIndex = $(this).index();
	// 	if ($(this).index() == 0) {
	// 		navliIndex = 0;
	// 	}else if ($(this).index() == 1){
	// 		navliIndex = 1;
	// 	}
	// 	$subNav.stop(true,true).show();
	// 	$subNavli.eq(navliIndex).stop(true,true).show();
	// 	$navLi.eq(navliIndex).addClass('cur');
	// }, function() {
	// 	$subNav.stop(true,true).hide();
	// 	$subNavli.stop(true,true).hide();
	// 	$navLi.removeClass('cur');
	// });

	

	//头部搜索
	$("header .extra-link .search-ico").on('click', function() {
		$(".search-alert").stop().fadeIn(300);
		$("body,html").addClass('ovh');
	});
	$(".search-alert .close").on('click', function() {
		$(".search-alert").stop().hide();
		$("body,html").removeClass('ovh');
	});
	$(".m-sub-menu .top-box .stt").on('click', function() {
		$(".m-sub-menu").removeClass('show');
		$(".body-wrap,#header").removeClass('left');
		$("body,html").removeClass('ovh');
		$(".search-alert").show();
	});
	//手机站头部导航展开
	$("header .navbar-toggle").on('click', function() {
		$(".m-sub-menu").addClass('show');
		$(".body-wrap,#header").addClass('left');
		$("body,html").addClass('ovh');
		$(this).addClass('cur');
	});
	$(".m-sub-menu .top-box .close").on('click', function() {
		$(".m-sub-menu").removeClass('show');
		$(".body-wrap,#header").removeClass('left');
		$("body,html").removeClass('ovh');
		$("#header .navbar-toggle").removeClass('cur');
	});
	$(".m-sub-menu .list-wrap span.col-box").on('click', function() {
		var n = $(this).parent("li").index();
		$(".m-sub-menu .sec-sub-list .boxs").eq(n).addClass('show');
	});
	$(".m-sub-menu .sec-sub-list .return-fir").on('click', function() {
		$(this).parent(".boxs").removeClass('show');
	});

	$(".contact-wrap .city-list li").eq(0).addClass('cur');
	$(".contact-wrap .address .boxs").eq(0).show();

	$(".contact-wrap .city-list li").on('click', function() {
		$(this).addClass('cur').siblings('li').removeClass('cur');
		var n = $(this).index();
		$(".contact-wrap .address .boxs").eq(n).show().siblings('.boxs').hide();
	});

	//视差效果
	$(window).scroll(function() {
        var top = $(window).scrollTop() / 2;
        $(".ins-ban .bgimg").css('top', top);
    });

	//内页banner
	if ($(window).width() > 800) {
		$(".ins-ban").height($(window).height() - 100);
	};
	$(".ins-ban .down-ico").on('click', function() {
		$("body,html").stop().animate({scrollTop: $(window).height() - 100}, 500, "easeOutQuint");
	});

	$(".wechat-info-ban .up-cont .down-ico").on('click', function() {
		$("body,html").stop().animate({scrollTop: $(window).height() - 100}, 500, "easeOutQuint");
	});

	
	var src = $(".ins-ban .bgimg").attr("src");
	var insbanimg = $(".ins-ban img.bgimg").attr("src");
	if (insbanimg != undefined || insbanimg != null) {
		_PreLoadImg([
			src
		],function(){
			$(".ins-ban .loader").fadeOut();
			if ($(window).width() > 800) {
				Fullinsbg($(".ins-ban"), $(".ins-ban .bgimg"));
			}
			$(".ins-ban .bgimg").stop().animate({opacity: 1}, 500,function(){
				$(".ins-ban").addClass('active');
			});
		})
	}else{
		$(".ins-ban .loader").fadeOut();
		if ($(window).width() > 800) {
			Fullvideo($(".ins-ban"), $(".ins-ban .bgimg"));
		}
		$(".ins-ban .bgimg").stop().animate({opacity: 1}, 500,function(){
			$(".ins-ban").addClass('active');
		});
	}
	window.onresize = function(){
		$(".i-ban").height($(window).height() - 100);

		if ($(window).width() < 1030) {
			$(".i-fir-wrap .about-recom").attr("style","");
		};

		if ($(window).width() > 800) {
			$(".ins-ban").height($(window).height() - 100);
		}else{
			$(".ins-ban").attr("style","");
			$(".ins-ban .bgimg").attr("style","").removeClass('h-f');
		}
		$(".ins-ban .bgimg").css('opacity', '1');
	}

	//滚动渐隐出现
	var scrollthis;
	$(window).scroll(function() {
		if ($("div,li").hasClass('fadeIntop')) {
			$(".fadeIntop").each(function() {
				var _this = $(this);
				if ($(window).scrollTop() > _this.offset().top - $(window).height() + 300 && !_this.hasClass('show')) {
					_this.addClass('show');
				};
			});
		};
		if ($("div,li").hasClass('fadeInlist')) {
			$(".fadeInlist").each(function() {
				var _this = $(this);
				if ($(window).scrollTop() > _this.offset().top - $(window).height() + 300 && !_this.hasClass('show')) {
					_this.addClass('show');
				};
			});
		};
		if ($(window).scrollTop() > 0) {
			$("header").addClass('fixed');
		}else{
			$("header").removeClass('fixed');
		}
		if ($(window).scrollTop() > 0 && !$(".float-right-box").hasClass('show')) {
			$(".float-right-box").addClass('show');
			$(".float-right-box").stop(true,true).addClass('on');
		}
		// var scrollT = $(window).scrollTop();
		// setTimeout(function(){
		// 	scrollthis = $(window).scrollTop();
		// },500);
		// if (scrollT - scrollthis < 0 && scrollT > 100) {
		// 	$(".ins-nav").addClass('fixed');
		// }else{
		// 	$(".ins-nav").removeClass('fixed');
		// }
	});
	$(".float-right-box").hover(function() {
		$(this).stop(true,true).removeClass('on');
	}, function() {
		var _this = $(this);
		if ($(window).scrollTop() > 0) {
			_this.stop(true,true).addClass('on');
		}else{
			$(".float-right-box").removeClass('show');
		}
	});
	$(document).on('mousewheel', function(event, delta, deltaX, deltaY) {
	    
	    if (deltaY > 0) {
	    	$(".ins-nav").addClass('fixed');
	    }else{
	    	$(".ins-nav").removeClass('fixed');
	    }
	});
	if ($("div,li").hasClass('fadeIntop')) {
		$(".fadeIntop").each(function() {
			var _this = $(this);
			if ($(window).scrollTop() > _this.offset().top - $(window).height() + 300 && !_this.hasClass('show')) {
				_this.addClass('show');
			};
		});
	};
	if ($("div,li").hasClass('fadeInlist')) {
		$(".fadeInlist").each(function() {
			var _this = $(this);
			if ($(window).scrollTop() > _this.offset().top - $(window).height() + 300 && !_this.hasClass('show')) {
				_this.addClass('show');
			};
		});
	};
	if ($(window).scrollTop() > 0) {
		$("header").addClass('fixed');
	}else{
		$("header").removeClass('fixed');
	}

	//手机端新闻推荐
	if (!isIE()) {
		var swiper2 = new Swiper('.news-recommend-list.m-scroll', {
	        loop : true,
	        slidesPerView: 2,
	        spaceBetween: 20,
	        paginationClickable : true,
	        autoplay : 3000,
	        pagination : '.news-recommend-list .pagination',
	        breakpoints: {
	            780: {
	                slidesPerView: 1,
	                spaceBetween: 0
	            }
	        }
	    });
	};
});
function Fullvideo(box, obj){
	function resizeBg() {
		obj.removeClass("w-f").removeClass("h-f").css("margin", 0)
		var boxR = $(window).width() / ($(window).height()-100),
			objR = $(".ins-ban .bgimg").width() / $(".ins-ban .bgimg").height();
		if( objR < boxR ) {
			if ($(".ins-ban .bgimg").height() > 0) {
		    	obj.addClass('w-f').css("margin-top", -($(".ins-ban .bgimg").height() - ($(window).height()-100)) / 2);
		   	};
		}else{
			if ($(".ins-ban .bgimg").width() > 0) {
		    	obj.addClass('h-f').css("margin-left", -($(".ins-ban .bgimg").width() - $(window).width()) / 2);
		    }
		}
	}
	$(window).resize(resizeBg).trigger("resize");
}
function Fullinsbg(box, obj){
	function resizeBg() {
		obj.removeClass("w-f").removeClass("h-f").css("margin", 0)
		var boxR = $(window).width() / ($(window).height()-100),
			objR = 1920 / 876;
		if( objR < boxR ) {
			if ($(".ins-ban .bgimg").height() > 0) {
		    	obj.addClass('w-f').css("margin-top", -($(".ins-ban .bgimg").height() - ($(window).height()-100)) / 2);
		   	};
		}else{
			if ($(".ins-ban .bgimg").width() > 0) {
		    	obj.addClass('h-f').css("margin-left", -($(".ins-ban .bgimg").width() - $(window).width()) / 2);
		    }
		}
	}
	$(window).resize(resizeBg).trigger("resize");
}

var isIE = function(){
	if ((navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i)=="7.") || (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8.") || (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i)=="9.")) {
		return true;
	}else{
		return false;
	}
}
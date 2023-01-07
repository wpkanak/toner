(function($) {
	///=============  Background Image  =============\\\
	$("[data-background]").each(function() {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});
	///=============  Search Icon  =============\\\
	$('.header__area-menubar-right-box-search-icon.open').on('click', function() {
		$('.header__area-menubar-right-box-search-box').fadeIn().addClass('active');
	});
	$('.header__area-menubar-right-box-search-box-icon').on('click', function() {
		$(this).fadeIn().removeClass('active');
	});
	$('.header__area-menubar-right-box-search-box-icon i').on('click', function() {
		$('.header__area-menubar-right-box-search-box').fadeOut().removeClass('active');
	});
	$('.header__area-menubar-right-box-search-box form').on('click', function(e) {
		e.stopPropagation();
	});
	///=============  Sidebar Popup  =============\\\
	$('.header__area-menubar-right-sidebar-popup-icon').on("click", function() {
		$('.header__area-menubar-right-sidebar-popup').addClass('active');
	});
	$('.header__area-menubar-right-sidebar-popup .sidebar-close-btn').on("click", function() {
		$('.header__area-menubar-right-sidebar-popup').removeClass('active');
	});
	$('.header__area-menubar-right-sidebar-popup-icon').on("click", function() {
		$('.sidebar-overlay').addClass('show');
	});
	$('.header__area-menubar-right-sidebar-popup .sidebar-close-btn').on("click", function() {
		$('.sidebar-overlay').removeClass('show');
	});
	///=============  Responsive Menu  =============\\\
	$('.menu-responsive').meanmenu({
		meanMenuContainer: '.responsive-menu',
		meanScreenWidth: '991',
		meanMenuOpen: '<span></span><span></span><span></span>',
		meanMenuClose: '<i class="fal fa-times"></i>'
	});
	///=============  Header Sticky  =============\\\
	$(window).on('scroll', function() {
		var scrollDown = $(window).scrollTop();
		if(scrollDown < 135) {
			$(".header__sticky").removeClass("header__sticky-sticky-menu");
		} else {
			$(".header__sticky").addClass("header__sticky-sticky-menu");
		}
	});
	///=============  Project Active Hover  =============\\\
	$(".project__area-item").hover(function() {
		$(".project__area-item").removeClass("project__area-item-hover");
		$(this).addClass("project__area-item-hover");
	});
	///=============  Project Two Active Hover  =============\\\
	$(".project__two-item").hover(function() {
		$(".project__two-item").removeClass("project__two-item-hover");
		$(this).addClass("project__two-item-hover");
	});
	///=============  Gallery Active Hover  =============\\\
	$(".gallery__area-item").hover(function() {
		$(".gallery__area-item").removeClass("gallery__area-item-hover");
		$(this).addClass("gallery__area-item-hover");
	});
	///=============  Property One Active Hover  =============\\\
	$(".property__one-item").hover(function() {
		$(".property__one-item").removeClass("property__one-item-hover");
		$(this).addClass("property__one-item-hover");
	});
	///=============  Property Two Active Hover  =============\\\
	$(".property__two-item").hover(function() {
		$(".property__two-item").removeClass("property__two-item-hover");
		$(this).addClass("property__two-item-hover");
	});
	///=============  CounterUp  =============\\\
	var counter = $('.counter');
	counter.counterUp({
		time: 2500,
		delay: 100
	});
	///=============  Property Slider  =============\\\
	var swiper = new Swiper(".property-slider", {
		slidesPerView: 1,
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".property-pagination",
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
				centeredSlides: false,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});
	///=============  Reviews  =============\\\
	var swiper = new Swiper(".reviews-slider", {
		slidesPerView: 1,
		loop: true,
		speed: 1000,
		spaceBetween: 30,
		pagination: {
			el: ".reviews-pagination",
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		}
	});
	///=============  Video Popup  =============\\\
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
	///=============  Image Popup  =============\\\
	$('.img-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	///=============  FAQ  =============\\\
	$(".faq__area-left-faq-item-card-header").click(function() {
		if($(this).next(".faq__area-left-faq-item-card-header-content").hasClass("active")) {
			$(this).next(".faq__area-left-faq-item-card-header-content").removeClass("active").slideUp()
			$(this).children("i").removeClass("far fa-long-arrow-up").addClass("far fa-long-arrow-down")
		} else {
			$(".faq__area-left-faq-item-card-header-content").removeClass("active").slideUp()
			$(".faq__area-left-faq-item-card-header i").removeClass("far fa-long-arrow-up").addClass("far fa-long-arrow-down");
			$(this).next(".faq__area-left-faq-item-card-header-content").addClass("active").slideDown()
			$(this).children("i").removeClass("far fa-long-arrow-down").addClass("far fa-long-arrow-up")
		}
	});
	///=============  Theme Loader  =============\\\
	$(window).on("load", function() {
		$(".theme-loader").fadeOut(500);
	});
	///============= Scroll To Top =============\\\
	var scrollPath = document.querySelector('.scroll-up path');
	var pathLength = scrollPath.getTotalLength();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'none';
	scrollPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	scrollPath.style.strokeDashoffset = pathLength;
	scrollPath.getBoundingClientRect();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
	var updatescroll = function() {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var scroll = pathLength - (scroll * pathLength / height);
		scrollPath.style.strokeDashoffset = scroll;
	}
	updatescroll();
	$(window).scroll(updatescroll);
	var offset = 50;
	var duration = 950;
	jQuery(window).on('scroll', function() {
		if(jQuery(this).scrollTop() > offset) {
			jQuery('.scroll-up').addClass('active-scroll');
		} else {
			jQuery('.scroll-up').removeClass('active-scroll');
		}
	});
	jQuery('.scroll-up').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({
			scrollTop: 0
		}, duration);
		return false;
	});
})(jQuery);
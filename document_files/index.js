
"use strict";

var ValveIndex = function ()
{
	function _logoBackground()
	{
		var lFollowX = 0,
			lFollowY = 0,
			x = 0,
			y = 0,
			friction = 1 / 30,
			translate;

		function moveBackground() {
			x += (lFollowX - x) * friction;
			y += (lFollowY - y) * friction;

			translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.25)';

			$J('.logo_bg').css({
				'-webit-transform': translate,
				'-moz-transform': translate,
				'transform': translate
			});

			window.requestAnimationFrame(moveBackground);
		}

		$J(window).on('mousemove click', function(e) {

			var lMouseX = Math.max(-100, Math.min(100, $J(window).width() / 2 - e.clientX));
			var lMouseY = Math.max(-100, Math.min(100, $J(window).height() / 2 - e.clientY));
			lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
			lFollowY = (10 * lMouseY) / 100;

		});

		moveBackground();
	}

	function _initializeNav()
	{
		$J( '.nav_toggle' ).on( 'click touch', function( ev )
		{
			ev.preventDefault();
			$J('.top_nav nav.nav').toggleClass('active');
			$J('.top_nav .nav_toggle').toggleClass('active');
			$J('body').toggleClass('nav_active');
		});
	}

	function _initializeCarousels()
	{
		var $slider = $J('.gallery').slick({
			arrows: false,
			dots: true,
			autoplay: true,
			autoplaySpeed: 2000,
			fade: true,
			focusOnSelect: true
		});
		$slider.find(".slick-slide").on("click", function(){
			$slider.slick("slickNext");
		});
	}

	function Init()
	{
		_logoBackground();
		_initializeNav();
		_initializeCarousels();
	}

	return {
		Init: Init
	}
}();

$J( document ).ready(
	function ()
	{
		ValveIndex.Init();
	}
);
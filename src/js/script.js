//=require jquery.min.js

// to inlude plugins add "=" sign below
//=require bootstrap.min.js
//=require slick.min.js 
//=require parallax.min.js 
//=require isotope.pkgd.min.js 

;(function($){

	$(document).ready(function(){
		$('.spa').parallax({imageSrc: '/img/spa.jpg'});
	

	var $gallery = $('.photo-gallery').isotope({
				itemSelector: '.photo-gallery__item',
				percentPositon: true,
				masonry: {
					columnWidth: '.photo-gallery__sizer'
				}
			});

			$('.photo-list').on('click', 'li', function(evt) {
				evt.preventDefault();

				var filterValue = $(this).data('filter');
				$gallery.isotope({filter: filterValue });

				$(this).addClass('active-filter').siblings().removeClass('active-filter');
			})

	$('.clients-slider').slick({
			dots: false,
			arrows: false
		});
});

})(jQuery);
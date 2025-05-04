
$( document ).ready(function($){
$('.main-slider').slick({
  dots: true, // Enables navigation dots below the slider
  infinite: true, // Enables infinite looping of slides
  speed: 500, // Sets the transition speed to 500ms (0.5 seconds)
  fade: false, // Disables fade transition (slides will slide instead)
  autoplay: false, // Disables automatic sliding
});



  
$(window).scroll(function() {
var tophead = $('#navbar');
if ($(this).scrollTop() > 750) {
tophead.addClass('fixed');
} 
else {
tophead.removeClass('fixed');
}

});

$('a.page-scroll').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 5000);
		e.preventDefault();
	});

});





$( document ).ready(function($){

	jQuery('#myTab li a').click(function(){
		
		jQuery('.products-slider').slick('refresh');
	 
	   });

$('.products-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]

});



});



$('.Blog-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 
});


$('.logo').slick({
  dots: false,
  infinite: true,
  speed: 1500,
  fade: false,
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
});

$('.text-slide').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: false,
  autoplay: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

			
			

// window.document.onkeydown = function(e) {
//   if (!e) {
//     e = event;
//   }
//   if (e.keyCode == 27) {
//     lightbox_close();
//   }
// }


// function lightbox_open() {
//   var lightBoxVideo = document.getElementById("VisaChipCardVideo");
//   window.scrollTo(0, 0); //scrolls the page to the top 
//   document.getElementById('light').style.display = 'block';
//   document.getElementById('fade').style.display = 'block';
//   lightBoxVideo.play();
// }

// function lightbox_close() {
//   var lightBoxVideo = document.getElementById("VisaChipCardVideo");
//   document.getElementById('light').style.display = 'none';
//   document.getElementById('fade').style.display = 'none';
//   lightBoxVideo.pause();
// }


	window.addEventListener('load', function () {
		var loader = document.querySelector('.loader');
		loader.classList.add('hide');
	});


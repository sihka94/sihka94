$(document).ready(function(){
 $('#slide').slick({
 		arrows:true,
 		prevArrow:'.assortment-slider__arrow__left',
 		nextArrow:'.assortment-slider__arrow__right',
 		autoplay:true,
		autoplaySpeed:4500, 		
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,

        responsive: [
            {
                breakpoint:1200,
                settings:{
                    arrows:false,
                    dots:true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint:996,
                settings:{
                    arrows:false,
                    dots:true,                    
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },   

            {
                breakpoint:570,
                settings:{
                    arrows:false,
                    dots:true,                    
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },                      
    ]
});
});
var openMobile = function() { 
    $('.mobile-menu').click(function() { 
        $('.header-menu').fadeIn(300)
        $('.mobile-close').fadeIn(300)
    });

    $('.mobile-close').click(function() { 
        $('.header-menu').fadeOut(300)
        $('.mobile-close').fadeOut(250)
    });  
  };
$(document).ready(openMobile);  
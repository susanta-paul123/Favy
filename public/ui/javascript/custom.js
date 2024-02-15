var wd = $(window).width();
$(document).ready(function(){
    
  $('.search-btn').click(function(){
    if(wd > 991){
        $(this).hide();
    }
    
    $('.search-input-wrapper').fadeToggle();
  });

  $('.menu-toggle').click(function(){
    $('.main-menu').fadeIn();
  })
  $('.menu-close').click(function(){
    $('.main-menu').fadeOut();
  })
  $('.navbar-nav li a').click(function(){
    $('.main-menu').fadeOut();
  });

  //

  var divs = $(".filter-items > .filter-item");
  for(var i = 0; i < divs.length; i+=5) {
  divs.slice(i, i+5).wrapAll("<div class='new'></div>");
  }


 
})

//beauty-health-carousel

$('.beauty-health-carousel .owl-carousel').owlCarousel({
    // loop: true,
    // autoplay: false,
    autoplayTimeout: 6000,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
    margin:15,
    lazyLoad: true,
    items: 1,
    responsiveClass: true,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


//blog-carousel

$('.blog-carousel .owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplaySpeed: 1500,
  smartSpeed: 1500,
  margin:30,
  lazyLoad: true,
  items: 1,
  responsiveClass: true,
  nav: true,
  dots: false,
  responsive: {
      0: {
          items: 1,
      },
      768: {
          items: 2
      },
      1000: {
          items: 3
      }
  }
});

//news-carousel

$('.news-carousel .owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplaySpeed: 1500,
  smartSpeed: 1500,
  margin:30,
  lazyLoad: true,
  items: 1,
  responsiveClass: true,
  nav: true,
  dots: false,
  responsive: {
      0: {
          items: 1,
      },
      768: {
          items: 2
      },
      1000: {
          items: 3
      }
  }
});

//testimonials-carousel

$('.testimonials-carousel .owl-carousel').owlCarousel({
  loop: true,
  autoplay: false,
  autoplayTimeout: 6000,
  autoplaySpeed: 1500,
  smartSpeed: 1500,
  margin:30,
  lazyLoad: true,
  items: 1,
  responsiveClass: true,
  nav: true,
  dots: true,
  responsive: {
      0: {
          items: 1,
      },
      768: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
});



//gallery-carousel

$('.gallery-carousel .owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplaySpeed: 1500,
  smartSpeed: 1500,
  margin:0,
  lazyLoad: true,
  items: 1,
  responsiveClass: true,
  nav: false,
  dots: false,
  responsive: {
      0: {
          items: 1,
      },
      768: {
          items: 2
      },
      1000: {
          items: 3
      }
  }
});

//services-provided-carousel

$('.services-provided-carousel .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

//doctors-involved-carousel

$('.doctors-involved-carousel .owl-carousel').owlCarousel({
    loop:true,
    autoplay: false,
    margin:30,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

//before-after-carousel
$('.before-after-carousel .owl-carousel').owlCarousel({
    loop:true,
    autoplay: false,
    margin:30,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        }
    }
})


//award-carousel
$('.award-carousel .owl-carousel').owlCarousel({
    loop:true,
    autoplay: false,
    margin:30,
    nav:true,
    dots:false,    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

//

if ($('div').hasClass('bn-carousel')) {
    var ourVenuesCarousel = $('#bnCarousel');

    ourVenuesCarousel.owlCarousel({

            loop: true,
            // nav:true,
            dots:false,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            touchDrag:false,
            slideBy:1,
            responsive: {
                0: {
                    items: 1
                }
            }
        });

    $(".pwNext").click(function() {
        ourVenuesCarousel.trigger('next.owl.carousel');
    });
    $(".pwPrev").click(function() {
        ourVenuesCarousel.trigger('prev.owl.carousel');
    });
}

//

$( function() {
$( "#datepicker" ).datepicker();
$( "#datepicker2" ).datepicker();

$(".timepicker").timepicker({
    timeFormat: "h:mm p", 
    interval: 30, 
    minTime: "06", 
    maxTime: "23:55pm", 
    // defaultTime: "06", 
    startTime: "01:00", 
    dynamic: true, 
    dropdown: true, 
    scrollbar: false,
  });
} );

$("#phone1").intlTelInput({});
$("#phone2").intlTelInput({});
$("#phone3").intlTelInput({});
$("#phone4").intlTelInput({});
$("#phone5").intlTelInput({});
$("#phone6").intlTelInput({});

$("#phone, #phone2, #phone3, #phone4,#phone5,#phone6").val('')


if($('#counter').length>0){
    var oTop = $(".counter-box").offset().top - window.innerHeight;
  }
  var a = 0;

$(window).scroll(function () {

  var sticky = $('header'),
          scroll = $(window).scrollTop();

      if (scroll >= 250) {
          sticky.addClass('sticky-nav');
          $('body').addClass('fixed-content');
      } else {
          sticky.removeClass('sticky-nav');
          $('body').removeClass('fixed-content');
      }
//

if (a == 0 && $(window).scrollTop() > oTop) {

    $(".counter").each(function () {
         var $this = $(this),
             countTo = $this.attr("data-number");
         $({
             countNum: $this.text()
         }).animate(
             {
                 countNum: countTo
             },
 
             {
                 duration: 850,
                 easing: "swing",
                 step: function () {
                     $this.text(
                         Math.ceil(this.countNum).toLocaleString("en")
                     );
                 },
                 complete: function () {
                     $this.text(
                         Math.ceil(this.countNum).toLocaleString("en")
                     );
 
                     $this.addClass('zoom-text')
                 }
             }
         );
     });
     
     a = 1;
 }


});

$('.speciality-checkbox .accordion-tab').click(function(){
    $(this).parent('.speciality-checkbox').siblings('.speciality-checkbox').children('.accordion-content').slideUp()
    $(this).parent('.speciality-checkbox').siblings('.speciality-checkbox').children('.accordion-tab').removeClass('active')
    $(this).addClass('active').next('.accordion-content').slideToggle()
})


//doctor-bio accordion

$('.biodata-accordion .accordion-tabs').click(function(){
    $(this).parent('.biodata-accordion').siblings('.biodata-accordion').children('.accordion-content').slideUp()
    $(this).parent('.biodata-accordion').siblings('.biodata-accordion').children('.accordion-tabs').removeClass('active')
    $(this).addClass('active').next('.accordion-content').slideToggle()
})

$(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});



AOS.init({
    once: true,
});












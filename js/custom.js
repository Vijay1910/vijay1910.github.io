$(function () {
"use strict";
    
// for navbar background color when scrolling
$(window).scroll(function () {
    var $scrolling = $(this).scrollTop();
    var bc2top = $(".back-top-btn");
    var stickytop = $(".sticky-top");
    if ($scrolling >= 10) {
        stickytop.addClass('navcss');
    } else {
        stickytop.removeClass('navcss');
    }
    
    if ($scrolling > 150) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(1000);
        }
});
      
// Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    
// Preloader js    
$(window).on('load', function(){
    $('.preloader').delay(1500).fadeOut(500);
    
})
    
//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 50
            }, 1500, 'easeInOutCubic');
            return false;
        }
    }
});
    
// this is for back to top and sticky menu js
var bc2top = $('.back-top-btn');
bc2top.on('click', function () {
    html_body.animate({
        scrollTop: 0
    }, 1000);
});
    
    
// Browse all js
$(".images-item").slice(0, 4).show();
$(".browse-all").on('click', function (e) {
    e.preventDefault();
    $(".images-item:hidden").slice(0, 2).slideDown(500);
    if ($(".images-item:hidden").length == 0) {
    }
    $('html,body').animate({
        scrollTop: $(this).offset().top - 85
    }, 1500);
});
    
// feedback js
$('.feedback-slide').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: '.left',
  nextArrow: '.right',
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,      
      slidesToShow: 1
      }
    },
    {
      breakpoint: 481,
      settings: {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,      
      slidesToShow: 1
      }
    }
  ]    
});    

});
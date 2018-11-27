
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);
  
    var nav_offset_top = $('header').height() + 50;


   /*-------------------------------------------------------------------------------
    Javascript for preloader
    -------------------------------------------------------------------------------*/
    $(window).on("load", function(){
        $(".preloader").fadeOut();
    });

    /*-------------------------------------------------------------------------------
    Javascript for scroll to top
    -------------------------------------------------------------------------------*/
    $(".scroll-up").hide();
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 250) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });
    $('.scroll-up').on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


    /*-------------------------------------------------------------------------------
    Navbar 
	-------------------------------------------------------------------------------*/

    //* Navbar Fixed  
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();

    /*-------------------------------------------------------------------------------
    Search Toggle 
	-------------------------------------------------------------------------------*/
    $("#search_input_box").hide();
    $("#search").on("click", function () {
        $("#search_input_box").slideToggle('slow');
        $("#search_input").focus();
    });
    $("#close_search").on("click", function () {
        $('#search_input_box').slideUp('slow');
    });


    // $('.navbar-nav>li>a').on('click', function(){
    //     $('.navbar-collapse').collapse('hide');
    // });


  
    /*-------------------------------------------------------------------------------
    Brand Slider 
	-------------------------------------------------------------------------------*/
    $(".brand-carousel").owlCarousel({
      items: 1,
      autoplay:false,
      loop:true,
      nav:false,
      dots:false,
      responsive: {
          0: {
              items: 2,
          },
          480: {
              items: 3,
          },
          768: {
              items: 3,
          },
          992: {
              items: 5,
          }
      }
    });
    
    /*-------------------------------------------------------------------------------
    Testimonial Slider 
	-------------------------------------------------------------------------------*/
    $('.active_testimonial').owlCarousel({
        items:1,
        loop:true,
        dots: false,
        autoplay:false,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-left'></span>","<span class='lnr lnr-arrow-right'></span>"]        
    });


    $('.service-featured-carousel').owlCarousel({
        items:3,
        loop:true,
        dots: false,
        autoplay:false,
        margin: 30,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-left'></span>","<span class='lnr lnr-arrow-right'></span>"],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            }
        }        
    });

    $('.recent-posts-widget-carousel').owlCarousel({
        items:1,
        loop:true,
        dots: true,
        autoplay:false,
        nav: false,
    });


    /*-------------------------------------------------------------------------------
    Counter js 
	-------------------------------------------------------------------------------*/
    if(document.getElementById("facts-area")){
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }

    /*----------------------------------------------------
    MailChimp Slider
    /*----------------------------------------------------*/
    function mailChimp() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();

    /*----------------------------------------------------
    MagnificPopup Js
    /*----------------------------------------------------*/
    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    /*-------------------------------------------------------------------------------
    Google Map js 
	-------------------------------------------------------------------------------*/
    if (document.getElementById("map")) {

        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            var mapOptions = {

                zoom: 11,

                center: new google.maps.LatLng(40.6700, -73.9400), // New York

                styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e9e9e9"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dedede"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#333333"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }]
            };

            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Snazzy!'
            });
        }
    }

   

 });

;
(function($) {
    "use strict";

    $(document).ready(function() {

        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        /*------------------------------------
            magnific popup activation
        --------------------------------------*/

        $('.videos-play').magnificPopup({
            type: 'iframe',
        });

        /* 
        ----------------------------------------
            SearchBar
        ----------------------------------------
        */

        $(document).ready(function() {
            $('.search-close').on('click', function() {
                $('.search-bar').removeClass('active');
            });
            $('.search-open').on('click', function() {
                $('.search-bar').toggleClass('active');
            });
        });

        /* 
        ----------------------------------------
            Sidebars
        ----------------------------------------
        */

        $(document).ready(function() {
            $('.sidebars-close').on('click', function() {
                $('.sidebars-wrappers').removeClass('active');
            });
            $('.sidebars-item').on('click', function() {
                $('.sidebars-wrappers').toggleClass('active');
            });
        });


        /*----------------------
            Slick Slider
        -----------------------*/

        $('.slick-slider-one').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            prevArrow: '<i class="las la-angle-left"></i>',
            nextArrow: '<i class="las la-angle-right"></i>',
            infinite: true,
            autoplay: false,
            pauseOnHover: true,
        });

        $('.slick-slider-two').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            prevArrow: '<i class="las la-angle-left"></i>',
            nextArrow: '<i class="las la-angle-right"></i>',
            infinite: true,
            autoplay: false,
            pauseOnHover: true,
        });

        $('.slick-slider-three,.video-slider-two,.comments-sldier').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            prevArrow: '<i class="las la-arrow-left"></i>',
            nextArrow: '<i class="las la-arrow-right"></i>',
            infinite: true,
            autoplay: true,
            pauseOnHover: true,
        });
        $('.slick-slider-four').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            prevArrow: '<i class="las la-arrow-left"></i>',
            nextArrow: '<i class="las la-arrow-right"></i>',
            infinite: true,
            autoplay: true,
            pauseOnHover: true,
            swipeToSlide: true,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        $('.team-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            prevArrow: '<i class="las la-arrow-left"></i>',
            nextArrow: '<i class="las la-arrow-right"></i>',
            infinite: true,
            autoplay: true,
            pauseOnHover: true,
            swipeToSlide: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        /*----------------------
            Banner Ads
        -----------------------*/

        $('.banner-ads-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            prevArrow: '<i class="las la-angle-left"></i>',
            nextArrow: '<i class="las la-angle-right"></i>',
            infinite: true,
            autoplay: false,
            pauseOnHover: true,
        });

        /*----------------------
            Video Slider
        -----------------------*/

        $('.video-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            prevArrow: '<i class="las la-angle-left"></i>',
            nextArrow: '<i class="las la-angle-right"></i>',
            infinite: true,
            autoplay: true,
            pauseOnHover: true,
        });

        /*----------------------
            Sports Slider
        -----------------------*/

        $('.sports-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            prevArrow: '<i class="las la-angle-left"></i>',
            nextArrow: '<i class="las la-angle-right"></i>',
            infinite: true,
            autoplay: false,
            pauseOnHover: true,
            responsive: [{
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        /*----------------------
            News Filter isotoop
        -----------------------*/
        $('#imageloader').imagesLoaded(function() {
            var $grid = $('.news-grids').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                }
            });
            // filter items on button click
            $('.news-button-list').on('click', '.lists', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
                // filter items add class
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        });


        /*
        ========================================
            accordion
        ========================================
        */

        $('.faq-contents .faq-title').on('click', function(e) {
            var element = $(this).parent('.faq-item');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('.faq-panel').removeClass('open');
                element.find('.faq-panel').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('.faq-panel').slideDown(300, "swing");
                element.siblings('.faq-item').children('.faq-panel').slideUp(300, "swing");
                element.siblings('.faq-item').removeClass('open');
                element.siblings('.faq-item').find('.faq-title').removeClass('open');
                element.siblings('.faq-item').find('.faq-panel').slideUp(300, "swing");
            }
        });

    });


    $(window).on('scroll', function() {

        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 300) {
            ScrollTop.fadeIn(300);
        } else {
            ScrollTop.fadeOut(300);
        }
    });

    /*------------------
        back to top
    ------------------*/
    $(document).on('click', '.back-to-top', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });

    /*-------------------------------
        Navbar Fix
    ------------------------------*/
    $(window).on('resize', function() {
        if ($(window).width() < 991) {
            navbarFix()
        }
    });

    function navbarFix() {
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a, .navbar-area .navbar-nav li.appside-megamenu>a', function(e) {
            e.preventDefault();
        })
    }


    /*-----------------
        preloader
    ------------------*/

    $(window).on('load', function() {
        $('#preloader').delay(1000).fadeOut('slow');
        $('body').delay(1000).css({
            'overflow': 'visible',
        });
    });

    /* $(window).on('load', function() {
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);

    }); */


})(jQuery);
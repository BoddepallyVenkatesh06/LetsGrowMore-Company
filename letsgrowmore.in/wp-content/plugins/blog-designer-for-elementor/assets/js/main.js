(function($) {
    var HeroSlider = function($scope, $) {

        var hero_slider = $('.active-main-slider');
        // var ocOptions = oc.data('carousel-options');
        hero_slider.each(function(index) {
            var carousel_opt = $(this).data('carousel-options');
            $(this).owlCarousel({
                dots: $(this).data("dots"),
                nav: $(this).data("nav"),
                loop: $(this).data("loop"),
                autoplay: $(this).data("autoplay"),
                autoplayTimeout: $(this).data("autoplay-timeout"),
                mouseDrag: $(this).data("mouse-drag"),
                touchDrag: $(this).data("touch-drag"),
                items: $(this).data('items'),
                autoplayHoverPause: $(this).data("auto-hover"),
                navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
                margin: $(this).data('margin'),
                smartSpeed: $(this).data('smart-speed'),
                fluidSpeed: $(this).data('fluid-speed'),
                autoplaySpeed: $(this).data('autoplay-speed'),
                navSpeed: $(this).data('nav-speed'),
                dotsSpeed: $(this).data('dot-speed'),
                center: $(this).data('center-mode'),
                responsive: {
                    0: {
                        items: 1,
                    },
                    // breakpoint from 480 up
                    360: {
                        items: $(this).data('mobile-items'),
                        margin: $(this).data('mobile-margin')
                    },
                    // breakpoint from 768 up
                    768: {
                        items: $(this).data('tablet-items'),
                        margin: $(this).data('tablet-margin')
                    },
                    992: {
                        items: $(this).data('medium-items'),
                        margin: $(this).data('medium-margin')
                    },
                    1200: {
                        items: $(this).data('items'),
                    }
                }
            });
        });
    };

    function bdfe_masonry() {
        var masonaryactive = $('.masonaryactive');
        masonaryactive.masonry({
            itemSelector: '.blog-grid-layout',
            margin: '50px',
            percentPosition: true,
        });
    }

    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/hero_slider.default', HeroSlider);
    });

    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/post_layouts.default', bdfe_masonry);
    });

})(jQuery);
$(document).ready(function () {

    var firstLeftBlock = $('.ohvat-screen-img');
    var firstRightBlock = $('.ohvat-screen-descr');
    var mobileContainer = $('.ohvat-mobile-img');
    var pagesBlockContainer = $('.pages-blocks-wrapper');
    var pagesBlockDescr = $('.ohvat-pages-title');

    $(window).scroll( function () {
        var windowWidth = $(this).width();
        var windowTopScroll = $(this).scrollTop();
        var classAnimation = mobileContainer.hasClass('mobile-animation');
        var classContainerAnimatePages = pagesBlockContainer.hasClass('animate-pages');
        var classDescrAnimatePages = pagesBlockDescr.hasClass('animate-pages');

        var firstBlocksAnimation = function( block ) {
            block.animate({ marginRight: 0}, {duration: 2000});
        };
        var secondBlocksAnimation = function( block ) {
            block.animate({ marginLeft: 0}, {duration: 2000});
        };

        if (windowWidth >= 997) {
            if(windowTopScroll > 100) {
                firstBlocksAnimation(firstRightBlock);
                secondBlocksAnimation(firstLeftBlock);
            }
            if(windowTopScroll > 850) {

                if(!classAnimation) {
                    mobileContainer.addClass('mobile-animation');
                }
            }
            if(windowTopScroll > 950 ) {

                if ( !classContainerAnimatePages && !classDescrAnimatePages) {
                    pagesBlockContainer.addClass('animate-pages');
                    pagesBlockDescr.addClass('animate-pages');
                }
            }
        } else if (windowWidth <= 996 && windowWidth >= 768) {
            if(windowTopScroll > 250) {
                secondBlocksAnimation(firstLeftBlock);
            }
            if(windowTopScroll > 650) {
                firstBlocksAnimation(firstRightBlock);
            }
            if (windowTopScroll > 1200) {
                if(!classAnimation) {
                    mobileContainer.addClass('mobile-animation');
                }
            }
            if (windowTopScroll > 1900) {
                if ( !classContainerAnimatePages ) {
                    pagesBlockContainer.addClass('animate-pages');
                }
            }
            if (windowTopScroll > 2100 ) {
                if (!classDescrAnimatePages) {
                    pagesBlockDescr.addClass('animate-pages');
                }
            }
        } else if ( windowWidth <= 767 ) {
            if (windowTopScroll > 150) {
                secondBlocksAnimation(firstLeftBlock);
            }
            if (windowTopScroll > 350) {
                firstBlocksAnimation(firstRightBlock);
            }
            if (windowTopScroll > 750 ) {
                if(!classAnimation) {
                    mobileContainer.addClass('mobile-animation');
                }
            }
            if (windowTopScroll > 1800 ) {
                if ( !classContainerAnimatePages ) {
                    pagesBlockContainer.addClass('animate-pages');
                }
            }
            if (windowTopScroll > 1900) {
                if (!classDescrAnimatePages) {
                    pagesBlockDescr.addClass('animate-pages');
                }
            }
        }
    });

});
$(document).ready( function () {

    $(window).scroll(function () {
        var windowWidth = $(this).width();
        var windowScrollTop = $(this).scrollTop();
        var firstBlock = $('.second-block');
        var secondBlock = $('.third-block');
        var thirdBlock = $('.fourth-block');
        var imgFirstBlock = $('.second-block-img');
        var imgSecondBlock = $('.third-block-img');
        var imgThirdBlock = $('.fourth-block-img');
        var descrFirstBlock = $('.second-block-descr');
        var descrSecondBlock = $('.third-block-descr');
        var descrThirdBlock = $('.fourth-block-descr');
        var colorGrey = "#868686";
        var colorWhite = "#fff";

        var firstBlocksAnimation = function( container, color, firstBlock) {
            container.delay(500).css( "background", color);
            firstBlock.animate({opacity: 1, marginLeft: 0}, {duration: 2000});
        };

        var secondBlockAnimation = function( secondBlock ) {
            secondBlock.animate({opacity: 1, marginRight: 0}, {duration: 2000});
        };
        /*
        third block animation (reveres)
         */
        var firstBlocksAnimationRevers = function( container, color, firstBlock) {
            container.delay(500).css( "background", color);
            firstBlock.animate({opacity: 1, marginRight: 0}, {duration: 2000});
        };

        var secondBlockAnimationRevers = function( secondBlock ) {
            secondBlock.animate({opacity: 1, marginLeft: 0}, {duration: 2000});
        };

        if (windowWidth >= 997) {
            if(windowScrollTop > 150) {
                firstBlocksAnimation( firstBlock, colorGrey, imgFirstBlock );
                secondBlockAnimation( descrFirstBlock );
            }
            if(windowScrollTop > 590) {
                firstBlocksAnimation( secondBlock, colorWhite, descrSecondBlock );
                secondBlockAnimation( imgSecondBlock );
            }
            if(windowScrollTop > 1050){
                firstBlocksAnimation( thirdBlock, colorGrey, imgThirdBlock );
                secondBlockAnimation( descrThirdBlock );
            }
        } else if (windowWidth <= 996 && windowWidth >= 768) {
            if(windowScrollTop > 450) {
                firstBlocksAnimation( firstBlock, colorGrey, imgFirstBlock );
            }
            if(windowScrollTop > 800) {
                secondBlockAnimation( descrFirstBlock );
            }
            if(windowScrollTop > 1200) {
                firstBlocksAnimationRevers( secondBlock, colorWhite, imgSecondBlock );
            }
            if (windowScrollTop > 1550) {
                secondBlockAnimationRevers (  descrSecondBlock );
            }
            if (windowScrollTop > 1900) {
                firstBlocksAnimation( thirdBlock, colorGrey, imgThirdBlock );
            }
            if (windowScrollTop > 2180) {
                secondBlockAnimation( descrThirdBlock );
            }
        } else {

            firstBlocksAnimation( firstBlock, colorGrey, imgFirstBlock );

            if ( windowScrollTop > 150) {
                secondBlockAnimation( descrFirstBlock );
            }
            if (windowScrollTop > 300 ) {
                firstBlocksAnimationRevers( secondBlock, colorWhite, imgSecondBlock );
            }
            if (windowScrollTop > 450 ) {
                secondBlockAnimationRevers (  descrSecondBlock );
            }
            if (windowScrollTop > 800 ) {
                firstBlocksAnimation( thirdBlock, colorGrey, imgThirdBlock );
            }
            if (windowScrollTop > 950 ) {
                secondBlockAnimation( descrThirdBlock );
            }
        }
    });
});
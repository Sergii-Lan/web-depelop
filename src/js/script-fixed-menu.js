$(document).ready( function () {
    var fixedMenuItems = $('.fixed-menu-items');
    var fixedMenuButton = $('.fixed-menu-button');
    var fixedMenu = $('.fixed-menu');

    fixedMenuButton.on('click', function (e) {
        e.preventDefault();
        if (fixedMenuItems.is(':visible')) {
            fixedMenuItems.hide('slow', function () {
                fixedMenuButton.removeClass('active');
            });
        } else {
            fixedMenuItems.show('slow', function () {
                fixedMenuButton.addClass('active');
            });
        }
    });

    $(window).on('scroll', function () {
        var windowScrollTop = $(this).scrollTop();

        if(windowScrollTop >= 150) {
            fixedMenu.fadeIn('slow');
        } else {
            fixedMenu.fadeOut('slow');
        }
    })
});
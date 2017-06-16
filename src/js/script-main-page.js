/**
 * Created by Сергей on 16.06.2017.
 */
$(function () {

    var $keyDesktop = $('.key-desktop-switcher');
    var $keyTablet = $('.key-tablet-switcher');
    var $keyMobile = $('.key-mobile-switcher');
    var $portDeskTab = $('.port-desk-tab');
    var $portfolioDesktop = $('.portfolio-desktop.active');
    var $portDispUlLi = $('.portfolio-display ul li');

    // $keyTablet.on('click', function (e) {
    //     e.preventDefault();
    //     $portfolioDesktop.empty();
    //     $portfolioDesktop.append('<img src="img/img-port-key-table.jpg">');
    //     $portDeskTab.addClass('.active');
    //     $portDispUlLi.removeClass('desktop-active');
    //     $(this).addClass('desktop-active');
    // });
    //
    // $keyDesktop.on('click', function (e) {
    //     e.preventDefault();
    //     $portfolioDesktop.empty();
    //     $portfolioDesktop.append('<img src="img/img-key-desktop.png">');
    //     $portDeskTab.addClass('.active');
    //     $portDispUlLi.removeClass('desktop-active');
    //     $(this).addClass('desktop-active');
    // });

    // $keyMobile.on('click', function (e) {
    //     e.preventDefault();
    //     $portfolioDesktop.empty();
    //     $portfolioDesktop.append('<img src="img/img-key-mobile.png">');
    //     $portDeskTab.addClass('.active');
    //     $portDispUlLi.removeClass('desktop-active');
    //     $(this).addClass('desktop-active');
    // });

    function click(a, b) {
        a.on('click', function (e) {
            e.preventDefault();
            $portfolioDesktop.empty();
            $portfolioDesktop.append(b);
            $portDeskTab.addClass('.active');
            $portDispUlLi.removeClass('desktop-active');
            $(this).addClass('desktop-active');
        });
    }
    click($keyMobile,'<img src="img/img-key-mobile.png">')
    click($keyDesktop,'<img src="img/img-key-desktop.png">')
    click($keyTablet,'<img src="img/img-port-key-table.jpg">')
});
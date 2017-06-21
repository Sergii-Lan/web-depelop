/**
 * Created by Сергей on 16.06.2017.
 */
$(function () {

    var $keyDesktop = $('.key-desktop-switcher');
    var $keyTablet = $('.key-tablet-switcher');
    var $keyMobile = $('.key-mobile-switcher');
    var $portDeskTab = $('.port-desk-tab');
    var $portfolioDesktop = $('.portfolio-desktop.active');
    var $portfolioDesktopDiv = $('.portfolio-key.active');
    var $portDispUlLi = $('.portfolio-display ul li');

    function click(a, b) {
        a.on('click', function (e) {
            e.preventDefault();
            $portfolioDesktop.empty();
            $portfolioDesktop.append(b);
            $portDeskTab.addClass('.active');
            $portDispUlLi.removeClass('desktop-active');
            $(this).addClass('desktop-active');
            if ($(this) != $keyDesktop) {
                $portfolioDesktopDiv.addClass('portfolio-desktop');
            } else {

                $portfolioDesktop.removeClass('portfolio-desktop');
            }
        });
    }
    click($keyMobile,'<img src="img/img-key-mobile.png">');
    click($keyDesktop,'<img src="img/img-key-desktop.png">');
    click($keyTablet,'<img src="img/img-key-tablet.png">')
});
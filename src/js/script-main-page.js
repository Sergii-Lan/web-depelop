/**
 * Created by Сергей on 16.06.2017.
 */
$(function () {

    //key var
    var $keyDesktop = $('.key-desktop-switcher');
    var $keyTablet = $('.key-tablet-switcher');
    var $keyMobile = $('.key-mobile-switcher');
    var $portfolioDesktop = $('.portfolio-desktop.key');
    var $portDispUlLi = $('.portfolio-display.key ul li');
    var $imgKeyDesktop = '<img src="img/img-key-desktop.png">';
    var $imgKeyTab = '<img src="img/img-key-tablet.png">';
    var $imgKeyMob = '<img src="img/img-key-mobile.png">';

    //ohvat var
    var $OhvatDesktop = $('.key-desktop-switcher-ohvat');
    var $OhvatTablet = $('.key-tablet-switcher-ohvat');
    var $OhvatMobile = $('.key-mobile-switcher-ohvat');
    var $portfolioDesktopOhvat = $('.portfolio-desktop.ohvat');
    var $portDispUlLiOhvat = $('.portfolio-display.ohvat ul li');
    var $imgOhvatDesktop = '<img src="img/img-ohvat-desktop.png">';
    var $imgOhvatTab = '<img src="img/img-ohvat-tablet.png">';
    var $imgOhvatMob = '<img src="img/img-ohvat-mobile.png">';

    //pingbuller var
    var $PingbullerDesktop = $('.key-desktop-switcher-pingbuller');
    var $PingbullerTablet = $('.key-tablet-switcher-pingbuller');
    var $PingbullerMobile = $('.key-mobile-switcher-pingbuller');
    var $portfolioDesktopPingbuller = $('.portfolio-desktop.pingbuller');
    var $portDispUlLiPingbuller = $('.portfolio-display.pingbuller ul li');
    var $imgPingbullerDesktop = '<img src="img/img-pingbuller-desktop.png">';
    var $imgPingbullerTab = '<img src="img/img-pingbuller-tablet.png">';
    var $imgPingbullerMob = '<img src="img/img-pingbuller-mobile.png">';

    //key-function
    function click(a, b) {
        a.on('click', function (e) {
            e.preventDefault();
            $portfolioDesktop.empty();
            $portfolioDesktop.append(b);
            $portDispUlLi.removeClass('desktop-active');
            $(this).addClass('desktop-active');
            if ($(this) != $keyDesktop) {
                $portfolioDesktop.addClass('active-no-before');
                console.log(1);
            }
            if (b == $imgKeyDesktop) {
                $portfolioDesktop.removeClass('active-no-before');
                console.log(3);
            }
        });
    }
    //Ohvat-function
    function clickOhvat(a, b) {
        a.on('click', function (e) {
            e.preventDefault();
            $portfolioDesktopOhvat.empty();
            $portfolioDesktopOhvat.append(b);
            $portDispUlLiOhvat.removeClass('desktop-active');
            $(this).addClass('desktop-active');
            if ($(this) != $OhvatDesktop) {
                $portfolioDesktopOhvat.addClass('active-no-before');
                console.log(1);
            }
            if (b == $imgOhvatDesktop) {
                $portfolioDesktopOhvat.removeClass('active-no-before');
                console.log(3);
            }
        });
    }
    //Pingbuller-function
    function clickPingbuller(a, b) {
        a.on('click', function (e) {
            e.preventDefault();
            $portfolioDesktopPingbuller.empty();
            $portfolioDesktopPingbuller.append(b);
            $portDispUlLiPingbuller.removeClass('desktop-active');
            $(this).addClass('desktop-active');
            if ($(this) != $PingbullerDesktop) {
                $portfolioDesktopPingbuller.addClass('active-no-before');
                console.log(1);
            }
            if (b == $imgPingbullerDesktop) {
                $portfolioDesktopPingbuller.removeClass('active-no-before');
                console.log(3);
            }
        });
    }

    click($keyDesktop,$imgKeyDesktop);
    click($keyTablet,$imgKeyTab);
    click($keyMobile,$imgKeyMob);

    clickOhvat($OhvatDesktop, $imgOhvatDesktop);
    clickOhvat($OhvatTablet, $imgOhvatTab);
    clickOhvat($OhvatMobile, $imgOhvatMob);

    clickPingbuller($PingbullerDesktop, $imgPingbullerDesktop);
    clickPingbuller($PingbullerTablet, $imgPingbullerTab);
    clickPingbuller($PingbullerMobile, $imgPingbullerMob);
});
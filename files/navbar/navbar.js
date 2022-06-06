var stickyNavTop = $('.header').offset().top;

function scrolling() {
    doc = $(document).height()
    hidingtop = $('.hiding').offset().top;
    hidingbottom = $('.hiding').position().top + $('.hiding').outerHeight(true)
    if ($(window).scrollTop() > hidingtop && $(window).scrollTop() < hidingbottom) {
        $('.header').removeClass('sticky');
        $('.container').css('padding-top', '0');
    }
}

var stickyNav = function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
        $('.header').addClass('sticky');
        $('.container').css('padding-top', '100px');
    } else {
        $('.header').removeClass('sticky');
        $('.container').css('padding-top', '0');
    }
};

stickyNav();

$(window).scroll(function () {
    stickyNav();

    scrolling()
});

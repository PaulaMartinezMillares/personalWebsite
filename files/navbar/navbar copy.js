var stickyNavTop = $('.header').offset().top;

function scrolling() {
    doc = $(document).height()
    hidingtop = $('.principal').offset().top;
    hidingbottom = $('.principal').position().top + $('.principal').outerHeight(true)
    if ($(window).scrollTop() > hidingtop && $(window).scrollTop() < hidingbottom) {
        $('.header').removeClass('sticky');
        $('.principal').css('padding-top', '0');
    }
}

var stickyNav = function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
        $('.header').addClass('sticky');
        $('.principal').css('padding-top', '100px');
    } else {
        $('.header').removeClass('sticky');
        $('.principal').css('padding-top', '0');
    }
};

stickyNav();

$(window).scroll(function () {
    stickyNav();

    scrolling()
});

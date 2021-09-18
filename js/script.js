$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__list').click(function(event) {
        $('.header__burger,.header__menu').removeClass('active');
        $('body').removeClass('lock');
    });
});

$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".header").addClass("scroll");
    }
    else {
        $(".header").removeClass("scroll");
    }
});

$(document).ready(function() {
    $('.header__menu ul li a').click(function(event) {
        $('.header__menu ul li a').removeClass('activelink');
        $(this).addClass('activelink');
        thisAttrHref = $(this).attr('href');
        thisAttrHrefOffset = $(thisAttrHref).offset().top + 50;
        $('html,body').animate({scrollTop:thisAttrHrefOffset});
        event.preventDefault();
    });
});

$(window).scroll(function() {
    $('.row').each(function() {
        containerRowTop = $(this).offset().top;
        if($(document).scrollTop() > containerRowTop){
            thisOfs = $(this).attr('id');
            $('.row').removeClass('activelink');
            ActiveID = $(this).addClass('activelink').attr('id');
        }
    });
    $('.header__menu ul li').each(function(index, el) {
        thisChildren = $(this).children('a');
        thisChildrenHref = $(this).children('a').attr('href');
        if(thisChildrenHref === '#' + ActiveID){
            $('.header__menu ul li a').removeClass('activelink');
            $(thisChildren).addClass('activelink');
        }
    });

});


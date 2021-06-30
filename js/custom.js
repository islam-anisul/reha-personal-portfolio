// navbar
$(window).scroll(function () {
    var winscroll = $(this).scrollTop();
    var winwidth = $(window).width();
    
    if ((winscroll > 200) && (winwidth > 991.8)) {
        $('.menu_list').addClass('scrol_menu_position');
        $('.logo').addClass("scrol_logo");
        $('.menu_toggle').show('slow');  
 
    } else if ((winscroll < 200) && (winwidth > 991.8)) {
        $('.menu_list').removeClass('scrol_menu_position');
        $('.menu_list').removeClass('scrol_menu');
        $('.logo').removeClass("scrol_logo");
        $('.menu_toggle').hide('slow');
    }
});
$(function(){
    var mobilwidth = $(window).width();

    if(mobilwidth<991.8){
        $('.menu_item').hide();
        $('.menu_toggle').click(function(){
            $('.menu_list').toggleClass('active');
            $('.menu_list').removeClass('scrol_menu_position');
            $('.menu_list').removeClass('scrol_menu'); 
            $('.menu_item').toggle('slow');
            
        });

        $('.list_toggle').click(function(){
            $('.menu_item').toggle('slow');
        });

        
    }
});
$('.menu_toggle').click(function () {
    $('.menu_list').toggleClass('scrol_menu_position');
    $('.menu_list').toggleClass('scrol_menu');    
});
// home page banner ripple js
$(function () {
    $("#banner").ripples({
        dropRadius: 20,
        perturbance: 0.03,
        resulation: 256,
    });
});
// home page banner ripple js end

//banner slider
$('.banner_right_box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    arrows: false,
    mobileFirst: true,
    vertical: true,
});
//about me counter
jQuery(document).ready(function($) {
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
});
// porofolio mix gallery
var mixer = mixitup('.gallery');

$(function () {
    $('.gallery_btn').delegate('.data_filter_btn', 'click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});


// testimonial slider
$('.testimonial_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    arrows: false,
    mobileFirst: true,
});

// back to top btn
$(function () {
    $('#back_to_top').hide();
});
$(window).scroll(function () {
    var backtop = $(this).scrollTop();
    if (backtop > 400) {
        $('#back_to_top').show('slow');
    } else {
        $('#back_to_top').hide('slow');
    }
});
$('#back_to_top').click(function () {
    $('html , body').animate({
        scrollTop: 0,
    }, 2000);
});
// preloader
$(window).on('load', function () {
    $('#preloader').delay(2000).fadeOut(2000);
});
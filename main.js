$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 40){
            $('.header').css({'background':'#69d186','box-shadow':'0 0.2rem 0.5rem rgba(0,0,0,0.4)'});
        }
        else{
            $('.header').css({'background':'none','box-shadow':'none'})
        }
    });

    $('.accheader').click(function(){
        $('.acc .accbody').slideUp();
        $(this).next('.accbody').slideDown();
        $('.acc .accheader span').text('+');
        $(this).children('span').text('-');
    });
    
});
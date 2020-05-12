$(document).ready(function () {
    $("#toggleMenu").on("click", function () {
        $('nav').toggleClass('toggledIn')
    });


    $("#closeMenu").on("click", function () {
        $('nav').removeClass('toggledIn')
    });









//add blury effect to menu items
$('.main-nav li a').hover(function (e) {

//    $('.main-nav li').css('filter', 'blur(2px)');
//
//
//    $(e.target.parentElement).css({
//        'filter': 'blur(0px)',
//        'transform': 'scale(1.1)',
//    });
//}, function () {
//    $(this).css({
//        'transform': 'scale(1)',
//    });
//});
//
//
//
//$('.main-nav li').mouseleave(function () {
//    $('.main-nav li').css('filter', 'blur(0px)');
    
    //$('.main-nav li').mouseleave(function () {
//    $('.main-nav li').css('filter', 'blur(0px)');
    
    
    $('.main-nav li').css('filter', 'blur(2px)');
    $(this.parentElement).css({
        'filter': 'blur(0px)',
        'transform': 'scale(1.1)',
    });
    
    
    
},function(){
    $('.main-nav li').css('filter', 'blur(0px)');
    $('.main-nav li').css('transform', 'scale(1)');
    
    
    
});

});

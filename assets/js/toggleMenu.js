$(document).ready(function() {
    $("#toggleMenu").on("click", function(){
        $('nav').toggleClass('toggledIn')
    });
    
    
    $("#closeMenu").on("click", function(){
        $('nav').removeClass('toggledIn')
    });
    
    
    
    
    
    
    
    
    
    //add blury effect to menu items
    $('.main-nav li').hover(function(e){
        
        $('.main-nav li').css('filter' , 'blur(3px)');
        
        
        $(e.target.parentElement).css({
            'filter' :'blur(0px)',
            'transform' :'scale(1.5)',
        });     
    },function(){
        $(this).css({
            'transform' :'scale(1)',
        }); 
    });
    
    
    
    $('.main-nav li').mouseleave(function(){
        $('.main-nav li').css('filter' , 'blur(0px)');
        
        
        
    })

    
    
    
});





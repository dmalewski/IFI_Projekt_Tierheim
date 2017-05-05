//allert('hello');

$(document).ready(function(){
    
    $('#i-nav').click(function(){
        
        $(this).addClass('open'); // hier kann man auch toogleClass chreiben damit wechsel sich die farben wenn man dreuf click
        
        $('ul').toggleClass('show');
        
       // allert('hello');
        
    });
    
});
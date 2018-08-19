$(function() {  
    var pull = $('#pull');  
        menu = $('nav ul');   
  
    $(pull).on('click', function() {   
        menu.slideToggle(300);
    });  
});


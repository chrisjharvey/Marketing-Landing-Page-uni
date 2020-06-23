AOS.init();


(function(){

    'use strict'

    var $projects = $('.projects');

    $projects.isotope({
        itemSelector:'.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){
        e.preventDefault();

        var filter = $(this).attr('data-filter')

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

    $('.card').mouseenter(function(){
        $(this).find('.card-overlay').css({'top': '-100%'});
        $(this).find('.card-hover').css({'top': '0'});

    }).mouseleave(function(){

        $(this).find('.card-overlay').css({'top': '0'});
        $(this).find('.card-hover').css({'top': '100%'});
    });

    $(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 200) { 
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});

})(jQuery); 
    

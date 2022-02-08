//Activador de jQuery

$(document).ready(function(){

    // Menu Responsive//
    
        $('aside#menu-responsive').css('right','-290px');
        $('#cerrar').hide();
    
        $('#abrir').click(function(){
            $('aside#menu-responsive').animate({
            right: 0
            },300,'easeOutExpo');
            $('#abrir').hide();
            $('#cerrar').show();
    
            $('header, main, footer').animate({
    
                right: 290,
                opacity: 0.15
    
            },300,'easeOutExpo');
    
             event.preventDefault();
        
         });
    
         $('#cerrar, aside#menu-responsive nav a').click(function(){ 
            $('aside#menu-responsive').animate({
                right: -290
            },300,'easeOutExpo');
            $('#abrir').show();
            $('#cerrar').hide();
    
            $('header, main, footer').animate({
    
                right: 0,
                opacity: 1
    
            },300,'easeOutExpo');
        });

        // Activación de transición del menú principal

  
		$('nav#menu-principal a, nav#menu-responsive a').bind('click',function(event){
            var $anchor = $(this);  
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000,'easeOutExpo');
            event.preventDefault();
		});
    
        // Function para Detectar Scroll Down
    
        $(window).scroll(function(){
            if ($(this).scrollTop() > 10) {
                 $('header').removeClass('transparent');
                 $('header').addClass('blue');

     
               } else {
                  $('header').removeClass('blue');
                  $('header').addClass('transparent');
    
    
              }
    
            });

        });
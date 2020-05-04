$(function() {

    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();


    function ocultar()
    {
        if( ancho < 1000 )
        {
            enlaces.hide();
            nombre.addClass('fa-bars');
            nombre.removeClass('fa-times');
                
        }
        else
        {
            enlaces.show();
            nombre.addClass('fa-bars');
            nombre.removeClass('fa-times');
            
        }  
    }


    // Menu Responsive

    // Calculo el ancho de la pagina
    var ancho = $(window).width(),
        enlaces = $('#enlaces'),
        btnMenu = $('#btn-menu'),
        nombre = $('#btn-menu .nombre');
        header = $('#header');

        if( ancho <= 1000 )
        {
            enlaces.hide();
            nombre.addClass('fa-bars');
        }

        btnMenu.on('click', function(event){
            event.preventDefault();
            
            enlaces.slideToggle();
            nombre.toggleClass('fa-bars')
            nombre.toggleClass('fa-times');
        });

        $(window).on('resize', function(event)
        {
            event.preventDefault();
            if( $(this).width() >= 1000 )
            {
                enlaces.show();
                nombre.addClass('fa-times');
                nombre.removeClass('fa-bars');
            }
            else
            {
                enlaces.hide();
                nombre.addClass('fa-bars');
                nombre.removeClass('fa-times');
            }
        });


    //Scroll

    $("#home").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 900);
        ocultar(); 
    });

    $("#job").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(".experiencia").offset().top
        }, 900);
        ocultar();        
     
    });

    $("#study").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(".conocimientos").offset().top
        }, 900);
        ocultar();
    });

    $("#education").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(".formacion").offset().top
        }, 900);
        
        ocultar();

    });

    $("#project").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(".proyectos").offset().top
        }, 900);
        ocultar();

    });

});


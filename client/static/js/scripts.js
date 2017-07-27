$(document).ready(function(){
    $('.parallax').parallax();
    $('.button-collapse').sideNav();
    $('.tooltipped').tooltip({delay: 50});
    $('.slider').slider();
    $('.scrollspy').scrollSpy({
        scrollOffset:30
    });
    $('.modal').modal();
    $('.button-collapse').sideNav({
        menuWidth: 250, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });
    // Scrollbar Code
    // var scroll_start = 0;
    // var startchange = $('#startchange');
    // var offset = startchange.offset();
    // if (startchange.length){
    //     $(document).scroll(function() { 
    //         scroll_start = $(this).scrollTop();
    //         if(scroll_start > offset.top) {
    //             // $("#my_navbar").removeClass('transparent z-depth-0');
    //             // $("#my_navbar").removeClass('invisible');
    //             // $("#my_navbar").addClass('customcolor z-depth-3');
    //             // $("#nav-anchor").addClass('navbar-fixed'); 
    //             $("#my_navbar").removeClass('invisible', 500);  
    //             $("#nav-anchor").removeAttr('hidden');  
    //         } 
    //         else {
    //             // $("#my_navbar").addClass('invisible');
    //             // $("#my_navbar").addClass('transparent z-depth-0');
    //             // $("#my_navbar").removeClass('customcolor z-depth-3');
    //             // $("#nav-anchor").removeClass('navbar-fixed');
    //             setTimeout(function(){
    //                 $("#nav-anchor").attr('hidden', 'true');
    //             });
    //             $("#my_navbar").addClass('invisible');

    //         }
    //     });
    // }

    // Content Animations //
    var options = [
        {selector: '#profile-pic', offset: 200, callback: function(el) {
            $(el).addClass('animated fadeInRight');
        }},
        {selector: '.about-header', offset: 50, callback: function(el){
            $('.about-header').addClass('animated fadeIn');
        }},
        {selector: '.about-text', offset: 200, callback: function(el){
            $('.about-text').addClass('animated fadeInLeft');
        }},
        {selector: '.skills-header', offset: 50, callback: function(el){
            $('.skills-header').addClass('animated fadeIn');
        }},
        {selector: '.row-1', offset: 100, callback: function(el){
            $('.row-1').addClass('animated fadeIn');
        }},
        {selector: '.row-2', offset: 100, callback: function(el){
            $('.row-2').addClass('animated fadeIn');
        }},
        {selector: '.row-3', offset: 100, callback: function(el){
            $('.row-3').addClass('animated fadeIn');
        }},
        {selector: '.row-4', offset: 100, callback: function(el){
            $('.row-4').addClass('animated fadeIn');
        }},
        {selector: '.row-5', offset: 100, callback: function(el){
            $('.row-5').addClass('animated fadeIn');
        }},
        {selector: '.projects-header', offset: 50, callback: function(el){
            $('.projects-header').addClass('animated fadeIn');
        }},
        {selector: '.card-1', offset: 275, callback: function(el){
            $('.card-1').addClass('animated fadeInLeft');
        }},
        {selector: '.card-2', offset: 275, callback: function(el){
            $('.card-2').addClass('animated fadeInRight');
        }},
        {selector: '.contact-header', offset: 50, callback: function(el){
            $('.contact-header').addClass('animated fadeIn');
        }},
        {selector: '.contact-row-1', offset: 50, callback: function(el){
            $('.contact-row-1').addClass('animated fadeIn');
        }},
        {selector: '.contact-row-2', offset: 50, callback: function(el){
            $('.contact-row-2').addClass('animated fadeIn');
        }},

    ];
    Materialize.scrollFire(options);

    // Navbar/FAB anomations //
    function Scroll(){
        var top = document.getElementById('myNav');
        var logo = document.getElementById('logo');
        var fab = document.getElementById('back-up');
        var ypos = window.pageYOffset;
        if(ypos > 40){
            top.style.height = "55px";
            top.style.backgroundColor = "#263238";
            logo.style.fontSize = "28px";
            fab.style.opacity = 1;
            top.classList.remove("z-depth-0");
        }
        else{
            top.style.height = "80px";
            top.style.backgroundColor = "transparent";
            logo.style.fontSize = "32px";
            fab.style.opacity = 0;
            top.classList.add("z-depth-0");
        }
    }

    window.addEventListener("scroll", Scroll);


    // Project Links //
    $('.project-link').hover(
        function(){
            $(this).children().removeClass('grey-text text-darken-4');
            $(this).children().addClass('white-text');
            $(this).addClass('secondary-color');
            $(this).css("cursor", "pointer");
        }, 
        function(){
            $(this).children().removeClass('white-text');
            $(this).children().addClass('grey-text text-darken-4');
            $(this).removeClass('secondary-color');
    });

    $('.project-link').click(function(){
            var url = $(this).children().attr("href");
            window.location = url;
    });

    $(document).on('mouseover', '.btn-large', function(){
        $(this).addClass('black');
    })

    // Card Animation //
    $('#back-up').hover(
        function(){
            $(this).addClass('z-depth-4');
        },
        function(){
            $(this).removeClass('z-depth-4');
        })

});

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

    // Image Animation //
    var options = [
        {selector: '#profile-pic', offset: 200, callback: function(el) {
            Materialize.fadeInImage($(el));
        }},
    ];
    Materialize.scrollFire(options);

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

    // Card Animation //
    $('.card').hover(
        function(){
            $(this).addClass('z-depth-4');
        },
        function(){
            $(this).removeClass('z-depth-4');
        })

});

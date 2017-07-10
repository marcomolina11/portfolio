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
        menuWidth: 200, // Default is 300
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
    var options = [
        {selector: '#profile-pic', offset: 200, callback: function(el) {
            Materialize.fadeInImage($(el));
        }},
    ];
    Materialize.scrollFire(options);



});

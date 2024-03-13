$(document).ready(function() {

    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');

    });
    $(window).on('scroll load', function() {
        $('#menu').toggleClass('fa-times');
        $('header').toggleClass('toggle');


    });
});
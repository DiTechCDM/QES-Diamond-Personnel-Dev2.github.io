$(document).ready(function () {
    $('.grid-in-row .grid-in-col').click(function () {
        $(this).addClass('actives');
        $(this).siblings().removeClass('actives');

    });

});
$(document).ready(function() {
    //what we do section toggle
    $('#design').click(function() {
        $(this).hide();
        $('.design').show();
    });
    $('.design').click(function() {
        $(this).hide();
        $('#design').show();
    });
    $('#dvpt').click(function() {
        $(this).hide();
        $('.dvpt').toggle();
    });
    $('.dvpt').click(function() {
        $(this).hide();
        $('#dvpt').toggle();
    });
    $('#product').click(function() {
        $(this).hide();
        $('.product').toggle();
    });
    $('.product').click(function() {
        $(this).hide();
        $('#product').toggle();
    });
});
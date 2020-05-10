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

    //portfolio overlays
    $(".portfolio").mouseover(function() {
        var images = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
        images.forEach(function(image) {
            $("p#" + image).show();
        });
    });

    $(".portfolio").mouseout(function() {
        var images = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
        images.forEach(function(image) {
            $("p#" + image).hide();
        });
    });

    //submit message
    $("form#my-form").submit(function(event) {
        event.preventDefault();
        var name = $("#name").val();
        alert("Dear " + name + " we have received your message. Thank you for reaching out to us.");
        document.getElementById("my-form").reset();
    })
});
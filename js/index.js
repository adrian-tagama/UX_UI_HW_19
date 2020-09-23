function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);

$("#down-arrow").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#work").offset().top
    }, 2000);
});


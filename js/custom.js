/*==============================================
                    Services
===============================================*/
$(function () {
    // Animate on scroll
    new WOW().init();
});
/*==============================================
                    Work
===============================================*/
$(function () {
    // Magnifing Popup
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
});
/*==============================================
                    Team
===============================================*/
$(function () {
    $("#team-member").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});
/*==============================================
                    Testimonials
===============================================*/
$(function () {
    $("#custormer-testmoinals").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});

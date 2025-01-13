const body = document.body, scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0], height = scrollWrap.getBoundingClientRect().height - 1, speed = 0.04;
var offset = 0;
body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

var elements = $(".text, .img").toArray();
$(window).scroll(function() {
    elements.forEach(function(element) {
        if ($(this).scrollTop() >= $(element.offset().top - 400)) {
            $(element).addClass("reveal")
        }
    });
});

elements.forEach(function(element) {
    if ($(this).scrollTop() >= $(element.offset().top - 400)) {
        $(element).addClass("reveal");
    }
});
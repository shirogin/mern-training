var slides = document.querySelectorAll("header .slider-content .slide");
var slidesNavs = document.querySelectorAll("header .navigation-number");

var active = 0;
setInterval(() => {
    slides[active].classList.remove("active");
    slidesNavs[oldActiveNumber].classList.remove("active");
    oldActiveNumber = active = (active + 1) % slides.length;
    slidesNavs[oldActiveNumber].classList.add("active");
    slides[active].classList.add("active");
}, 5000);

var oldActiveNumber = 0;
slidesNavs.forEach((elm) => {
    elm.onclick = function (e) {
        slidesNavs[oldActiveNumber].classList.remove("active");
        e.target.classList.add("active");
        oldActiveNumber = Number(e.target.innerHTML) - 1;
        slides[active].classList.remove("active");
        active = oldActiveNumber;
        slides[active].classList.add("active");
    };
});

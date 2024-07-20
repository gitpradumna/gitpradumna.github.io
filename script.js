// alert("Hello, World!");
let menuButton = document.querySelector(".menu-icon");
let crossIcon = document.querySelector("#cross"); // Directly target the cross icon
let menu = document.querySelector(".hidden-icon"); // The menu is the parent of the cross icon

menuButton.addEventListener('click', function() {
    menu.classList.add("class1");
    menu.classList.remove("hidden-icon");
});

crossIcon.addEventListener('click', function() {
    menu.classList.add("hidden-icon");
    menu.classList.remove("class1");
});


//photo next button and pre button
let slides = document.querySelectorAll('.section-image');
let cnt = 0;

slides.forEach((slide, idx) => {
    slide.style.left = `${idx * 100}%`;
});

function prevPhoto() {
    cnt = (cnt > 0) ? cnt - 1 : slides.length - 1;
    scroll();
}

function nextPhoto() {
    cnt = (cnt < slides.length - 1) ? cnt + 1 : 0;
    scroll();
}

function scroll() {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${cnt * 100}%)`;
    });
}

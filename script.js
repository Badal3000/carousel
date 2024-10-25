const carousel = document.querySelector('.carousel');
const slidesContainer = document.querySelector('.slider-container'); 
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentSlide = 0;
const imgNo = 8;


function createImages(imgNo) {
    for (let i = 0; i < imgNo; i++) {
        const url = `https://picsum.photos/seed/slide${i}/1080/720`;
        const slide = document.createElement('div');
        slide.classList.add("slided");
        const img = document.createElement("img");
        img.src = url;
        slide.append(img);
        slidesContainer.append(slide);
        addPagination();
    }
}


function setSlides() {
    const slides = document.querySelectorAll('.slided'); 
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
}


function showNextSlide() {
    const slides = document.querySelectorAll('.slided');
    currentSlide = (currentSlide + 1) % slides.length; 
    setSlides();
    addPagination()
}


function showPrevSlide() {
    const slides = document.querySelectorAll('.slided');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
    setSlides();
    addPagination();
}


next.addEventListener('click', showNextSlide);
prev.addEventListener('click', showPrevSlide);
let interval = null;
function changeInterval(){
    interval = setInterval(showNextSlide,5000);
}
const button = document.querySelectorAll(".dot");

function addPagination(){
    button.forEach((element, index) => {
        if(index == currentSlide){
            element.classList.add("active");

        }
        else{
            element.classList.remove("active");
        }
        console.log(element)
    });
}

createImages(imgNo);
setSlides();
changeInterval();

const arrowRight = document.getElementById("arrowright");
const arrowLeft = document.getElementById("arrowleft");
const bottom = document.getElementById("bottom");
const img = document.querySelectorAll(".img");

let currentIndex = 0;
const paganationCircle = [];

function createCircle() {
    const div = document.createElement("div");
    div.className = ("circle");
    bottom.appendChild(div);
    paganationCircle.push(div);
}
function addPaganationCircle() {
    img.forEach(createCircle);
    paganationCircle[0].classList.add("active");
    paganationCircle.forEach((circle , index) => {
        circle.addEventListener("click", ()=> slideChange(index));
    });
}
addPaganationCircle();

function addActiveClass(){
    paganationCircle[currentIndex].classList.add("active");
}
function removeActiveClass(){
    paganationCircle[currentIndex].classList.remove("active");
}
function showSlides() {
    img[currentIndex].classList.add("blocked");
}
function hideSlides() {
    img[currentIndex].classList.remove("blocked");
}
function slideChange(slideIndex){
    hideSlides();
    removeActiveClass();
    currentIndex = slideIndex;
    addActiveClass()
    showSlides();
}

function nextSlides() {
    let nextSlide =  currentIndex + 1;
    if (nextSlide > img.length - 1) {
        nextSlide = 0;
    }
    slideChange(nextSlide);
}

function prevSlides() {
    let prevSlide = currentIndex -1;
    if (prevSlide < 0) {
        prevSlide = img.length - 1;
    }
    slideChange(prevSlide);
}

arrowRight.addEventListener("click", ()=>{
    if(currentIndex === img.length - 1){
        alert(`You increase maximum limit of slides`)
        return
    }
    nextSlides();
});
arrowLeft.addEventListener("click", ()=>{
 if(currentIndex === 0){
     alert(`You cannot slide back`);
     return;
 }
 prevSlides();
});
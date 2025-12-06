const slideshow = document.querySelector(".slideshow")
console.log(slideshow)
const images = slideshow.children;
let currentImage = 0
function showNextImage(){
    images[currentImage].classList.remove("active")
    currentImage = (currentImage +1)% images.length
    images[currentImage].classList.add("active")
}

setInterval(showNextImage, 4000);
images[0].classList.add("active")
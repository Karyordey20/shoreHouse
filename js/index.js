function menuClick() {
    const toggle = document.querySelector(".js_menu")
    const menu = document.querySelector(".menu")
    toggle.classList.toggle("active")
    if(toggle.classList.contains("active")){
        menu.innerText = "Close"
    }else{
        menu.innerText = "Menu"
    }
    // if(toggle.classList.contains("active")){
    //     toggle.classList.remove("active")
    //     menu.innerText = "Menu"
    // }
    // else{
    //     toggle.classList.add("active")
    //     menu.innerText = "Close"
    //     console.log(toggle.innerHTML)
    // }
    
}

// document.addEventListener("DOMContentLoaded", () =>{
// const galleryInnner = document.querySelector(".gallery_inner .imgs");
// const images = galleryInnner.children;
// const cloneImages = Array.from(images).map(image => image.cloneNode(true));
// cloneImages.forEach(cloneImage => {
//     galleryInnner.appendChild(cloneImage);
// })});

// function showImage(){
//     const galleryInnner = document.querySelector(".gallery_inner .imgs");
// const images = galleryInnner.children;
// const cloneImages = Array.from(images).map(image => image.cloneNode(true));
// cloneImages.forEach(cloneImage => {
//     galleryInnner.appendChild(cloneImage)}
// )}

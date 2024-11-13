/**
 * Funciones en el script slideshow.js
 * 
 * Estas van a controlar el funcionamiento del componente slideshow.
 * 
 * Este slideshoe tendra unos controladores para pasar hacia alante y hacia atras los slides.
 * 
 * También tendra unos puntos para poder sleccionar y ver cada slide.
 * 
 * Tmbién será automáticp y podremos ir vienso cada slide cada cierto tiempo.
 */

//Inicializamos un contador slideIndex
let slideIndex = 1;
showSlide(slideIndex);

//Selccionamos las flechas para next y prev slide
let nextSlideArrow = document.querySelector(".next");
let prevSlideArrow = document.querySelector(".prev");
let dotSelect = document.querySelector("dot");

nextSlideArrow.addEventListener("click", function(){
    nextPrevSlide(1);
})
    
prevSlideArrow.addEventListener("click", function(){
    nextPrevSlide(-1);
})

dotSelect.addEventListener("click", function(){

})

function letDotSelect(s){
    
}
  

/**
 * 
 * @param {number} n 
 * 
 * Esta función aumenta o disminuye el slideIndex en fución del paramentro que le llegue.
 */
function nextPrevSlide(n){
    slideIndex += n;
    //slideIndex = slideIndex + n;
    showSlide(slideIndex);
}

/**
 * 
 * @param {number} slideNum
 * 
 * Estaa función hace que se vea una slide en concreto. 
 */
function showSlide(slideNum){
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");

    if (slideNum> slides.length){
        slideIndex = 1;
    }

    if (slideNum < 1){
        slideIndex = slides.length;
    }

    //Bucle for para recorrer el array de slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //Bucle for para recorrer el array de dots 
    for (j = 0;j < dots.length; j++) {
        dots[j].className = dots[j].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
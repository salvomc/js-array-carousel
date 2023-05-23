

let images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

let slider = document.getElementById("slider");


for ( let i = 0; i < images.length; i++ ) 

    {
        slider.innerHTML += `<div class="item"> <img src="${images[i]}" alt=""> </div> `;   
    }

let items = document.querySelectorAll(".item");
let count = 0;
items[count].classList.add("active");

const next = document.querySelector(".button.next");
const previous = document.querySelector(".button.previous");


next.addEventListener("click", function () 
    
    {
        items[count].classList.remove("active");
        items[count].classList.add("active");     
    })

previous.addEventListener("click", function () 
    
    {
        items[count].classList.remove("active");
        items[count].classList.add("active");
    })
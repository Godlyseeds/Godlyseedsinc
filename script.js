var header = document.querySelector("header");
var brand = document.getElementById("brand");
var links = document.querySelectorAll("[id=link]");
var image = document.getElementById("image");

window.addEventListener("scroll", function () {
	
    if (window.scrollY > 130) {
        header.classList.add("scrolled");
        brand.classList.add("scrolled");
        image.classList.add("scrolled");
        links.forEach(link=>{
            link.classList.add("scrolled");
        })
    }else{
        header.classList.remove("scrolled");
        brand.classList.remove("scrolled");
        image.classList.remove("scrolled");
         links.forEach(link=>{
            link.classList.remove("scrolled");
        })
    }
});
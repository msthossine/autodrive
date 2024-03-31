let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function showNavManu() {
  var x = document.getElementById("manu-right-id");
  var z = document.getElementById("nav-ee")
  var y = document.getElementById("nav-eee")
  if (x.className === "responsive") {
    x.className = "manu-right";
    y.className ="responsive"
    z.className = "nav-ff"
  } else {
    x.className = "responsive";
    y.className ="nav-fg"
    z.className = "responsive"
  }
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const navLinkBtn = document.querySelectorAll(".nav-link-btn");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
navLink.forEach(n => n.addEventListener("click", closeMenu));
navLinkBtn.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const carouselOptions = {
  interval: 5000,
  cycle: true
}

new bootstrap.Carousel(document.querySelector('#carouselMalang'), carouselOptions)
new bootstrap.Carousel(document.querySelector('#carouselTuren'), carouselOptions)

const navigate = link => {
  window.open(link, "_blank");
}

// Add active class to the current button (highlight it)
let btns = document.getElementsByClassName("nav-menu");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

let today = new Date()
let curHr = today.getHours()
let timeText = document.getElementById('time-text');

if (curHr < 12) {
  timeText.innerHTML = "Pagi";
}
else if(curHr >=12 && curHr <=17){
  timeText.innerHTML = "Siang";
}
else if (curHr > 17 && curHr <=24) {
  timeText.innerHTML = "Sore";
}
else
{
  timeText.innerHTML = "Malam";
}

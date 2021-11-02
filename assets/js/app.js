// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburger selector

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

// Select nav links 
const navLink = document.querySelectorAll(".menu-link");

navLink.forEach((link) => 
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

$(document).ready(function() {
  $(window).scroll(function(){
    if($(this).scrollTop() > 500) {
      $('nav').addClass('solid');
    } else {
      $('nav').removeClass('solid');
    }
  })
})
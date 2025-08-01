burger = document.querySelector(".burger")
navbar = document.querySelector(".navbar")
ul = document.querySelector("ul")
scndul = document.querySelector(".scndul")
logo = document.querySelector(".logo")

burger.addEventListener("click", () => {
    ul.classList.toggle("v-nav-resp")
    scndul.classList.toggle("v-nav-resp")
    logo.classList.toggle("v-nav-resp")
    navbar.classList.toggle("h-nav-resp")
})
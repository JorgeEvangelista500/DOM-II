import './less/index.less'

// Your code goes here!
const links = document.querySelectorAll("a");
links.forEach (link => {
    link.addEventListener("click", function(event){
        event.preventDefault();
    })
})

const logo = document.querySelector(".logo-heading")
console.log(logo)
logo.addEventListener("mouseover", function(event){
    event.target.style.color = "blue"
})
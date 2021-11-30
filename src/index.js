import './less/index.less'

// Your code goes here!

const links = document.querySelectorAll("a");
links.forEach (link => {
    link.addEventListener("click", function(event){
        event.preventDefault();
    })
})

const logo = document.querySelector(".logo-heading")
// console.log(logo)
logo.addEventListener("mouseover", function(event){
    event.target.style.color = "blue"
})

let scale = 1;
function zoom(event){
        event.preventDefault();

        scale += event.deltaY * -0.01;

        scale = Math.min(Math.max(.125, scale), 4);

        busPic.style.transform = `scale(${scale})`;
      

}
const busPic = document.querySelector(".intro img")
// console.log(busPic)
busPic.addEventListener("wheel", zoom);

const button = document.querySelector(".btn")
button.addEventListener("dblclick", function(event){
    event.target.style.backgroundColor = "red"
})
    
const welcome = document.querySelector(".intro p")
console.log(welcome)
welcome.addEventListener("select", function(event){
   event.target.style.color = "green"
})

// const letGo = document.querySelector(".content-section h2")

window.addEventListener("keydown", function(event){
    if  (event.key === "Escape")
    event.target.style.color = "red"
})

const destinationsTitle = document.querySelector(".destination h4")
console.log(destinationsTitle)

destinationsTitle.addEventListener("copy", function(event){
   event.target.style.color = "green"
})

document.addEventListener("fullscreenchange", function(event){
    event.target.style.color = "red"
})

button.addEventListener("auxclick", function(event){
    event.target.style.color = "green"
})

const footer = document.querySelector(".footer")
footer.addEventListener("mouseout", function(event) {
    event.target.style.color = "purple";
    setTimeout(function() {
    event.target.style.color = "";
      }, 400);
    }, false);

    links.forEach (link => 
        link.addEventListener("mouseleave", function(event){
            event.target.style.color = "orange";

            setTimeout(function() {
                event.target.style.color = "";
              }, 1000);

            }, false))

        
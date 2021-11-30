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

const buttons = document.querySelector(".btn")
buttons.addEventListener("dblclick", function(event){
    event.target.style.backgroundColor = "red"
})
    

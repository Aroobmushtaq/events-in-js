let box=document.querySelector("#box");
console.log(box)
box.onclick=()=>{
    console.log("you click the box")
}
box.onmouseover=()=>{
    console.log("you click the box")
}
//Event Listener
let btn=document.querySelector("button")
btn.addEventListener("click", ()=>{
    console.log("you click the button")
})


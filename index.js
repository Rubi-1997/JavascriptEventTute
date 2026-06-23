let data=document.getElementById("inputValue")
function buttonClicked(){

// let dt=data.value
console.log(data.value)
let headerText=document.getElementById("navText")
headerText.innerText=`,${data.value}`
}

let button=document.getElementById("button");
button.addEventListener("click",buttonClicked)


function colorRed(){
    box1.style.backgroundColor="red";
    box1.style.color="white"
}



let box1=document.getElementById("box1")
box1.addEventListener("click",colorRed)


function colorGreen(){
    /* give style using js */
    box2.style.backgroundColor="Green";
    box2.style.color="white"
}



let box2=document.getElementById("box2")
box2.addEventListener("click",colorGreen)

function colorBlue(){
    box3.style.backgroundColor="Blue";
    box3.style.color="white"
}



let box3=document.getElementById("box3")
box3.addEventListener("click",colorBlue)

function colorYellow(){
    box4.style.backgroundColor="yellow";
    
}



let box4=document.getElementById("box4")
box4.addEventListener("click",colorYellow)
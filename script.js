function hello(){
alert("Welcome to random bible verse");
let name = prompt("enter your name");
let display = document.querySelector("h3")
let button = document.querySelector("button")
display.innerText="welcome! "+name;
button.disabled=true;
}
// Colour change 

const allButtons = document.querySelectorAll(".my-buttons button");

for(let button of allButtons){
    button.addEventListener("click",()=>{
        button.style.backgroundColor="yellow";
    })
}
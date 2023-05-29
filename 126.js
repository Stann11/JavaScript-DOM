const mainbutton = document.querySelector("button");
const body1 = document.body;

function randomcolourgenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomcolor = `rgb(${red},${green},${blue})`;
    return randomcolor;
}
mainbutton.addEventListener("click",function(){
    const random1 = randomcolourgenerator();
    body1.style.backgroundColor=random1;
    const span1 = document.querySelector(".current-color");
    span1.textContent=`${random1}`;
});
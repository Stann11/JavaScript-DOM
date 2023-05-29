//this keyword
// value of this for normal function will be the element itself
// value of this for arrow function will be the window object 

const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", ()=>{
    console.log("You clicked me !");
});
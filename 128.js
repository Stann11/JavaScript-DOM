console.log("Hello");

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


// child.addEventListener("click",()=>{
//     console.log("--------------> child");
// },true);
// grandparent.addEventListener("click",()=>{
//     console.log("--------------> grandparent");
// },true);
// parent.addEventListener("click",()=>{
//     console.log("--------------> parent");
// },true);
// document.body.addEventListener("click", ()=>{
//     console.log("--------------> body");
// },true);

// child.addEventListener("click",()=>{
//     console.log("You clicked on child");
// });
// grandparent.addEventListener("click",()=>{
//     console.log("You clicked on grandparent");
// });
// parent.addEventListener("click",()=>{
//     console.log("You clicked on parent");
// });
// document.body.addEventListener("click", ()=>{
//     console.log("You clicked on body");
// });

//Event deligation 
grandparent.addEventListener("click",(e)=>{
    console.log(e.target);
});
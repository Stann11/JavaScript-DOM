// Loops 

// const a = document.getElementsByTagName("a"); //HTML Collection is obtained which is type of object
// console.log(a);
// for(let j of a){
//     console.log(j);
//     const navitem= j;
//     navitem.style.backgroundColor="White";
//     navitem.style.color="green";
// }

//error code
// const c=document.getElementsByTagName("a");
//     for(let i in c){
//         const anchor=i;
//         anchor.style.color="green";
//     }

const b = document.querySelectorAll("a"); //Node list is obtained which is type of object 
console.log(b);

for(let i of b){
    const h=i;
    h.style.backgroundColor="White";
    h.style.color="green";
    h.style.fontWeight="Bold";
}
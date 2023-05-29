//innerHTML

const heading = document.querySelector(".headline");
console.log(heading);
heading.innerHTML="<h1>Hello! How are you ?</h1>";
heading.innerHTML+="<button class=\"btn\"> I am good </button>"
console.log(heading);
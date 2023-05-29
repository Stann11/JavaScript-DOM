// Change text
//textcontent and innertext
//textcontent will show the element/data that is hidden also and not showing in the website
//innertext will show only the element/data that is not hidden and is inside the element

const heading =document.getElementById("main-heading");
console.log(heading.textContent);
console.log(heading.innerText);
heading.textContent="This is my heading";
console.log(heading.textContent);
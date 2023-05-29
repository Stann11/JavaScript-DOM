//Get and set attribute

const query = document.querySelector("a");  
console.log(query.getAttribute("href"));
query.setAttribute("href","https://codprog.com");
console.log(query.getAttribute("href"));
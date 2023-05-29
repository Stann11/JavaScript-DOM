//Clone nodes 

const ul= document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent="Hello";
ul.append(li);
const li1 =li.cloneNode(true);
ul.prepend(li1);
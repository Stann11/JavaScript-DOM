//Old methods to add and remove elements 
//appendchild(elementname)
//insertbefore(new , reference)
//replacechild(new , tobereplace)
//removechild(elementname)

const todo = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent="New to do element";
todo.appendChild(li);

const reference = document.querySelector(".ok");
todo.insertBefore(li,reference);

todo.replaceChild(li,reference);

todo.remove(li);
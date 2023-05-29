//elem.insertAdjacentHTML(where,html)
//beforebegin
//afterbegin
//beforeend
//afterend

const todo = document.querySelector(".todo-list");
todo.insertAdjacentHTML("afterbegin","<li>Hello</li>");
todo.insertAdjacentHTML("afterend","<li>Hello</li>");
todo.insertAdjacentHTML("beforebegin","<li>Hello</li>");
todo.insertAdjacentHTML("beforeend","<li>Hello</li>");
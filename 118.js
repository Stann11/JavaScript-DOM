//Static vs live list 

//queryselectorall will give static list 
//getelementbysomething will give live list 

const ul = document.querySelector(".todo-list");
const listItem = ul.getElementsByTagName("li");

const six = document.createElement("li");
six.textContent="New to do ";

ul.append(six);
//document.createElement()
//append
//prepend 
//remove
const appendtodo = document.createElement("li");

// const textappendtodo = document.createTextNode("Teach students");
appendtodo.textContent="Teach Students";

const parent1 = document.querySelector(".todo-list");
// appendtodo.append(textappendtodo);
parent1.append(appendtodo);
console.log(parent1);

// const appendtodo1 = document.createElement("li");
// appendtodo1.textContent="TM";
// parent1.prepend(appendtodo1);
// appendtodo1.remove();

//Before and after methods

const appendtodo1 = document.createElement("li");
appendtodo1.textContent="TM";
parent1.before(appendtodo1);
parent1.after(appendtodo1);
const todo = document.querySelector(".todo-list");
const todoform = document.querySelector(".form-todo");
const todoinput = document.querySelector(".form-todo input[type='text']");
todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const inputvalue = todoinput.value;
    const newLi = document.createElement("li");
    const newlidata = `
          <span class="text">${inputvalue}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>
    ` 
    newLi.innerHTML=newlidata;
    todo.append(newLi);
    todoinput.value="";
});

todo.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        const lispan =e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        const liremove = e.target.parentNode.parentNode;
        liremove.remove();
    }
});
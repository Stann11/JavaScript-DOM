const buttons = document.querySelectorAll(".my-buttons button");

for(let button of buttons){
    button.addEventListener("click", function(){
        console.log(this.textContent);
    });
}
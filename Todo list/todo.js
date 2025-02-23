const input = document.querySelector(".input1");
const button = document.querySelector(".entry");
const list= document.querySelector(".list");
button.addEventListener('click',addtolist);
function addtolist(event){
    event.preventDefault();
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo")
    
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add('todo-item');
    tododiv.appendChild(newTodo);

    const completedbtn = document.createElement('button')
    completedbtn.innerHTML = '<i class="fas fa-check"></i>';
    completedbtn.classList.add("complete-btn");
    tododiv.appendChild(completedbtn);

    const trashbtn= document.createElement('button')
    trashbtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashbtn.classList.add("complete-btn");
    tododiv.appendChild(trashbtn);
    todolist.appendChild(tododiv);
}
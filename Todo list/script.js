function validate(event) {
    event.preventDefault();
    const task = document.getElementById('input1').value;
    
    if (task.trim() === "") return; // Optional: ignore empty input

    const newTask = document.createElement("li"); // Correct way to create a new element
    newTask.innerText = task;

    document.getElementById("list").appendChild(newTask); // Append to list
    const btn1 = document.createElement("button");
    btn1.innerText="Done";
    btn1.style.backgroundColor="#bce9e4";
    
    document.getElementById("list").appendChild(btn1);
    document.getElementById('input1').value = ""; // Clear input after adding
    btn1.onclick=function(){
        newTask.remove();
        btn1.remove();
    }
}

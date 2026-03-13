let btn = document.querySelector("#addTask");
let list = document.querySelector("#list");
let inpTask = document.querySelector("#task");
let noOfTask = document.querySelector("#counter");

let count = 0;

function addTask() {
    let taskValue = inpTask.value.trim();
    if(taskValue==="") {
        alert("Enter the task");
    }
    else {
        let li = document.createElement("li");
        li.innerText = taskValue;

        let delBtn = document.createElement("button");
        delBtn.innerText = "delete";
        delBtn.classList.add("delete");

        li.append(" ", delBtn);
        list.append(li);

        inpTask.value = "";

        count++;
        noOfTask.innerText = count;
    }
}

btn.addEventListener("click", addTask);

inpTask.addEventListener("keypress", function(event) {
    if(event.code==="Enter") {
        addTask();
    }
})

list.addEventListener("click", function(event) {
    if(event.target.tagName==="BUTTON") {
        event.target.parentElement.remove();
        count--;
        noOfTask.innerText = count;
    }
    else if(event.target.tagName==="LI") {
       event.target.classList.toggle("active");
    }
})
// 1. event
// let btn = document.querySelector("#btn");

// btn.onclick = function() {
//     console.log("hello!");
// }

// btn.onclick = function() {
//     console.log("Welcome to DOM Events!");
// }

// 2. add Event Listeners
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", function() {
//     console.log("hello!");
// })

// btn.addEventListener("click", function() {
//     console.log("Welcome to DOM Events!")
// })


// 3. Event Object
// let container = document.querySelector(".box");

// container.addEventListener("mouseenter", function(event) {
//     console.log("mouse entered the box.");
//     console.log(event.target);
// })

// container.addEventListener("mouseleave", function(event) {
//     console.log("mouse left the box.");
//     console.log(event.target);
// })

// let btn = document.querySelector("button");
// btn.addEventListener("click", function(event) {
//     console.dir(event.target);
// })

// 4. Event Listeners for Element
// let paras = document.querySelectorAll(".para");
// for(let para of paras) {
//     para.addEventListener("click", function() {
//         console.log(para.innerText);
//     })
// }

// 5. this in Event Listener
// let heading = document.querySelector("h2");
// let para = document.querySelector("p");
// let btn = document.querySelector("button");

// function printInfo() {
//     console.log(this.innerText);
// }

// heading.addEventListener("click", printInfo);
// para.addEventListener("click", printInfo);
// btn.addEventListener("click", printInfo);

// 6. Keyboard Events
// let inp = document.querySelector("#username");
// inp.addEventListener("keydown", function(event) {
//     console.log(`${event.code} was pressed!`);
// })

// 7. Form Events
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let username = document.querySelector("#user");
//     let password = document.querySelector("#pass");
//     console.log(username.value);
//     console.log(password.value);
//     username.value = "";
//     password.value = "";
// })

// 8. Event Bubbling
// let list = document.querySelector("#list");
// list.addEventListener("click", function(event) {
//     console.log(event.target);
//     console.log("parent got triggered!");
// })

// let lis = list.children;
// for(let li of lis) {
//     li.addEventListener("click", function(event) {
//         event.stopPropagation();
//         console.log(event.target.innerText);
//     })
// }

// 9. Todo App
// let btn = document.querySelector("#addBtn");
// let list = document.querySelector("#list");

// btn.addEventListener("click", function() {
//     let inp = document.querySelector("#newTask");
//     let task = inp.value.trim();

//     if(task==="") {
//         alert("enter task");
//     }
//     else {
//         let li = document.createElement("li");
//         li.innerText = task;

//         let delBtn = document.createElement("button");
//         delBtn.innerText = "delete";
//         delBtn.classList.add("deleteBtn");

//         li.append(" ", delBtn);
//         list.append(li);
//         inp.value = "";
//     }
// })

// list.addEventListener("click", function(event) {
//     if(event.target.tagName==="BUTTON") {
//         event.target.parentElement.remove();
//     }
//     else if(event.target.tagName==="LI") {
//         event.target.classList.toggle("textDecor");
//     }
// })


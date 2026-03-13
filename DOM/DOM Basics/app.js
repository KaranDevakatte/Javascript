// 1. DOM Basics : 
// console.dir(document); //object
// console.dir(document.activeElement); //body
// console.log(document.activeElement.children); //HTML Collection storing all elements of document
// document.activeElement.children[1].innerText = "Karan Devakatte"; //manipulating content

// 2. Selecting Elements
// let heading = document.getElementById("heading");
// let paras = document.getElementsByClassName("para");
// let btn = document.getElementsByTagName("button");

// console.dir(heading);
// console.log(paras);
// console.log(btn);

// document.getElementsByClassName("para")[1].remove(); //Manipulating DOM

// console.log(paras); //Automatically collection get updated

// let heading = document.querySelector("#heading");
// let para1 = document.querySelector(".para");
// let paras = document.querySelectorAll(".para");
// let btn = document.querySelectorAll("button");

// console.dir(heading);
// console.log(para1);
// console.log(paras);
// console.log(btn);

// document.querySelectorAll(".para")[1].remove(); //Manipulating DOM

// console.log(paras); //nodelist does not get updated


// 3. Manipulating Content
// let user = document.querySelector("#username");

// console.log(user.innerText);
// console.log(user.innerHTML);
// console.log(user.textContent);

// 4. Manipulating Attributes
// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");

// console.log(btn1.classList);
// btn1.classList.add("border");
// btn1.classList.add("red");
// console.log(btn1.classList);

// console.log(btn1.getAttribute("class"));
// btn1.setAttribute("class", "green");

// 4. Style Manipulation
// let btn1 = document.querySelector("#btn1"); //inline style
// let btn2 = document.querySelector("#btn2");

// console.log(btn1.style.backgroundColor); //inline style accessed
// console.log(btn2.style.backgroundColor);

// btn1.style.backgroundColor = "purple";
// btn2.style.backgroundColor = "purple";

// console.log(btn1.style.backgroundColor); 
// console.log(btn2.style.backgroundColor);


// 5. classList Property
// let container = document.querySelector("#container");
// console.log(container.classList);
// container.classList.add("bgColor");
// console.log(container.classList);

// container.classList.remove("bgColor");
// console.log(container.classList);

// console.log(container.classList.contains("bgColor"));

// container.classList.toggle("bgColor");


// 6. Navigation on Page
// let body = document.querySelector("body");
// console.log(body.children);
// console.log(body.childElementCount);

// let lis = document.querySelectorAll("li");
// console.log(lis);

// console.dir(lis[1].parentElement);
// console.log(lis[1].previousElementSibling.innerText);
// console.log(lis[1].nextElementSibling.innerText);


// Creating Elements on Page
// let container = document.createElement("div");
// container.classList.add("border");

// let para = document.createElement("p");
// para.innerText = "new post"

// let btn = document.createElement("button");
// btn.innerText = "click me!"

// container.append(para, btn);

// let h3 = document.querySelector("h3");
// h3.insertAdjacentElement("afterend", container);

// h3.append(", subscribe to get such more amazing videos!");

// container.removeChild(btn);

// h3.nextElementSibling.remove();
let li = document.createElement("li");
li.innerText = "4";

let list = document.querySelector("#numbers");
list.insertAdjacentElement("afterbegin", li);

let numbers = list.children;
for(let num of numbers) {
    if(num.innerText==="2") {
        num.remove();
    }
}

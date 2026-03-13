let li = document.createElement("li");
li.innerText = "Orange";

let list = document.querySelector("#list");
list.appendChild(li);

let items = list.children;

for(let item of items){
    if(item.innerText === "Banana"){
        item.remove();
    }
}
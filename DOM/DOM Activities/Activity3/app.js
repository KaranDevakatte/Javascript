let fruits = document.querySelector("#fruits");

let li = fruits.children[1];

console.log(li.innerText);
console.log(li.previousElementSibling.innerText);
console.log(li.nextElementSibling.innerText);
console.dir(li.parentElement);
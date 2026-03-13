let btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    let count = document.querySelector("#count");
    let value = count.innerText;
    value++;
    count.innerText = value;
})
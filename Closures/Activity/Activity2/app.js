function getCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    }
}

let counter1 = getCounter();

counter1();
counter1();
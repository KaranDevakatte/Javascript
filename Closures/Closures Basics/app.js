function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let counter = outer();
let counter2 = outer();

counter();
counter();
counter();

counter2();
counter2();
counter2();
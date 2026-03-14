function multiplier(num1) {
    let mul = num1;
    return function(num2) {
        return mul*num2;
    }
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5));
console.log(triple(5));
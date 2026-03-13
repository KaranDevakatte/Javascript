// function getBurger(callback) {
//     setTimeout(() => {
//         console.log("Burger ready");
//         callback();
//     },1000);
// }

// function getFries(callback) {
//     setTimeout(() => {
//         console.log("Fries ready");
//         callback();
//     },2000);
// }

// function getCoke() {
//     setTimeout(() => {
//         console.log("Coke ready");
//     },1000);
// }

// getBurger(() => {
//     getFries(() => {
//         getCoke();
//     })
// })


// function getBurger() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Burger ready");
//         },1000);
//     })
// }

// function getFries() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Fries ready");
//         },2000);
//     })
// }

// function getCoke() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Coke ready");
//         },1000);
//     })
// }

// getBurger().then((result) => {
//     console.log(result);
//     return getFries();
// })
// .then((result) => {
//     console.log(result);
//     return getCoke();
// })
// .then((result) => {
//     console.log(result);
// })


function getBurger() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Burger ready")
            resolve();
        },1000);
    })
}

function getFries() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fries ready");
            resolve();
        },2000);
    })
}

function getCoke() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Coke ready");
            resolve();
        },1000);
    })
}

async function getOrder() {
    await getBurger();
    await getFries();
    await getCoke();
}

getOrder();
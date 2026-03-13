function placeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order placed");
            resolve();
        },1000);
    })
}

function prepareFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food preparing");
            resolve();
        },1000);
    })
}

function deliverFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food delivered");
            resolve();
        },1000);
    })
}

// placeOrder().then(() => {
//     return prepareFood();
// })
// .then(() => {
//     return deliverFood();
// })
// .then(() => {
//     console.log("Order completed");
// }) 

async function getOrder() {
    try{
        await placeOrder();
        await prepareFood();
        await deliverFood();

        console.log("Order completed");
    }
    catch(err){
        console.log("Order failed", err);
    }
}
getOrder();
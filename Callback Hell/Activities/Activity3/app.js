function taskCompleted(task, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${task} done`);
            resolve();
        }, delay);
    })
}

// taskCompleted("task1", 2000).then(() => {
//     return taskCompleted("task2",1000);
// })
// .then(() => {
//     return taskCompleted("task3", 3000);
// })
// .then(() => {
//     console.log("All tasks completed");
// })
// .catch((err) => {
//     console.log(err);
// })

async function getResult() {
    await taskCompleted("task1", 2000);
    await taskCompleted("task2", 1000);
    await taskCompleted("task3", 3000);
    console.log("All tasks completed");
}

getResult();
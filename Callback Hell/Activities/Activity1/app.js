function login(username, password) {
    return new Promise((resolve, reject) => {
        console.log("checking username...");

        setTimeout(() => {
            console.log("checking password...");

            if(password === 1234){
                resolve("Login success");
            } else {
                reject("Invalid password");
            }

        },1000);
    })
}

login("karan",1234).then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})
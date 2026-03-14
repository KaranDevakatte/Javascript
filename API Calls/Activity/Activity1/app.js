let url = "https://jsonplaceholder.typicode.com/users";

async function getName() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        for(let user of data) {
            console.log(user.name);
        }
    } catch (err) {
        console.log(err);
    }
}

getName();
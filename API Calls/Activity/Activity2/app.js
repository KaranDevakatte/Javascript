let url = "https://jsonplaceholder.typicode.com/posts?_limit=5";

async function getPost() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        for(let user of data) {
            console.log(user.title);
        }
    } catch (err) {
        console.log(err);
    }
}

getPost();
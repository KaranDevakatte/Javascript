// API call using  fetch method
async function getData() {
    try {
        let res = await fetch("url");
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

// API call using  axios
async function getData() {
    try{
        let res = await axios.get("url");
        console.log(res.data);
    }
    catch(err){
        console.log(err);
    }
}
let url = "https://dog.ceo/api/breeds/image/random";

async function getImage() {

    try{

        let res = await fetch(url);
        let data = await res.json();

        return data.message;

    }
    catch(err){

        console.log("Error:", err);

    }

}

let btn = document.querySelector("#btn");
let img = document.querySelector("#dogImg");

btn.addEventListener("click", async function(){

    let link = await getImage();

    if(link){
        img.src = link;
    }

});
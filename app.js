let btn = document.querySelector("button");
 let joke = document.querySelector("#joke");
let apiURL = "  https://hindi-jokes-api.onrender.com";
let apiKey = "fbf6bfcf52bf09a79e2520021c9a";
// let options = {
//         method: 'GET',
//         headers: {
//             "X-Api-Key" : apiKey,
//         },
//     };

const fetchData = async () => {
    const url = "https://hindi-jokes-api.onrender.com/jokes?api_key=fbf6bfcf52bf09a79e2520021c9a";
    try{
    joke.innerText = "Updating...";
    btn.innerText = "Loading...";
    const response = await fetch(url);
    const data = await response.json();
    joke.innerText = data.jokeContent;
    btn.innerText = "TELL ME JOKE";
    // console.log(data.jokeContent);
    }
    catch(error){
        joke.innerText = "Connection failed.., try again "
        btn.innerText = "Your Offline";
    }
}

btn.addEventListener("click", fetchData);
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
let saved = ``;

btn1.addEventListener("click", function(event) {
    let url = prompt(`Write your url`, `https://google.com`);
    if (url === null || url === "" || !url.startsWith("https://") && !url.startsWith("http://")) {
        alert("Please enter a valid URL!");
    }
    else{
        saved = url;
        alert(`Your url has been saved: ${url}`);
    }
})
btn2.addEventListener("click", function(event) {
 window.location = saved;
})

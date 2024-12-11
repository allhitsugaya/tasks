/*H.W. 11.3*/
const img = [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`, `6.jpg`, `7.jpg`, `8.jpg` , `9.jpg`];
function randomImage() {
    const random = Math.floor(Math.random() * img.length);
    return img[random];
}

const ranimg = document.getElementById("img");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    ranimg.src =  randomImage();
})
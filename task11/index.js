/*H.W. 11.2*/
const button = document.querySelector("#button");
const p = document.querySelector("#lol");
button.addEventListener("click", () => {
    if(p.style.color === `black` ){
    p.style.color = "red";
}
else{
    p.style.color = "black";
}});
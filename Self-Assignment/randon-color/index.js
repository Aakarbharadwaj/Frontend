let a = document.querySelector(".color").children;

function randonColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`;
}

Array.from(a).forEach(x=>{
    x.style.backgroundColor=randonColor();
})
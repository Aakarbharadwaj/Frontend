let l=document.querySelectorAll("button");

for(let i of l){
    console.log(i.innerText);
    i.onclick = function(){
        console.log("hello");
    if(i.innerText == "="){
        let digit = document.querySelector("input").value;
        document.querySelector("input").value = eval(digit);
    }
    
    else if(i.innerText == "AC"){
        document.querySelector("input").value="";
    }
    else{
        document.querySelector("input").value += i.value;
    }
}
}
document.getElementById("btn").onclick=function(){
    let num=document.querySelector("#box").value;
    let c=document.querySelector("#color").value;
    let l=document.querySelectorAll(".boxcolor");
    console.log(l);
    if(num<=l.length){
        for(let i=1  ; i<=l.length ; i++){
            if(i==num){
                console.log(i);
                console.log(i-1);
                l[i-1].style.background=c;
            }  
        }
    }
    else{
        alert("Enter a valid number");
    } 
}
// document.querySelectorAll(".boxcolor")
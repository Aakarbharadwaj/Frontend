document.getElementById("btn").onclick=function(){
    let num=document.querySelector("#box").value;
    let c=document.querySelector("#color").value;
    let l=document.querySelectorAll(".boxcolor");

    for(let i=1  ; i<=l.length ; i++){
        if(i==num){
            document.querySelectorAll(".boxcolor")[i-1].style.background=c;
        } 
    }
}
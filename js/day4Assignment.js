document.getElementById("btn").onclick=function(){
    let num=document.querySelector("#box").value;
    let c=document.querySelector("#color").value;
    let l=document.querySelectorAll(".boxcolor");
    
    if(num<l.length){
        for(let i=1  ; i<=l.length ; i++){
            if(i==num){
                l[i-1].style.background=c;
            }  
        }
    }
    else{
        alert("Enter a valid number");
    } 
}
// document.querySelectorAll(".boxcolor")
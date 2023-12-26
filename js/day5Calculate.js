document.querySelector("select").onclick=function(){
    let sign =document.querySelector("select").value;
    let num1=Number(document.querySelector("#num1").value);
    let num2=Number(document.querySelector("#num2").value);
    if(sign == "+"){
        console.log(num1+num2);
    }
    else if(sign == "-"){
        console.log(num2-num1);
    }
    else if(sign == "*"){
        console.log(num1*num2);
    }
    else{
        console.log(num1/num2);
    }
    
}
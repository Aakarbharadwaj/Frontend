// //return new array with double values
// let arr = [10,20,30,40];

// let a = arr.map((item)=>item*2);
// console.log(a);

////ttaking input from user
let add = document.querySelector("#btn1");
let newArr=[];
add.onclick=()=>{
    let digit = document.querySelector("input").value;
    document.querySelector("input").value="";
    document.querySelector("input").focus();
    newArr.push(digit);
}
let print = document.querySelector("#btn2");
print.onclick=()=>{
        let arr =newArr.map((item)=>{
             return item*2;
        });
        console.log(newArr)
        for(let i=0;i<(newArr.length);i++){
            document.querySelector("h1").innerHTML += arr[i]+" ";
            console.log(newArr);
        }
    }
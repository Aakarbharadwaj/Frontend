////Filter
// let arr = [2,5,8,9,10,13,14,15,16];

// let newArr = arr.filter((x)=>(x%2==0))

// console.log(newArr);

// //map
// let arr = [2,5,8,9,10,13,14,15,16];

// let newArr = arr.map((a)=>(a**2));

// console.log(newArr);

////Reduce

// let arr = [2,5,8,9,10,13,14,15,16];

// let newArr = arr.reduce((a,b)=>a+b);

// console.log(newArr);

////forEach
let text ="";
let arr = [2,5,8,9,10,13,14,15,16];

 function print(item){
   
    text += item + "<br>"; 

}
arr.forEach(print)
document.querySelector("h1").innerHTML=text;

console.log(text)

// function print(item){
//     text += item;
// }
// arr.forEach();

//Anonymous Function
// (function(a,b){
//     console.log(a+b)
// })(10,20)

//Function Expresstion
// let add = function(a,b){
//     console.log(a+b);
// }
// add(10,41);

//Arrow Function

// (()=>{
//     console.log("Hello world");
// })();


// let hello =()=>console.log("Hello worldddddd ");
// hello();


//////
// function add(a,b){
//     console.log(a+b);
// }
// add(10,25);

// let add = (a,b)=>a+b;
// console.log(add(10,90));

///Odd Even number

// let oddEven = (n)=>{
//     if(n%2==0){
//         return (n+" is even");
//     }
//     return (n+" is odd");
// }

// console.log(oddEven(5));

//palindrom number

// let palindrom = (n)=>{
//     let temp = n;
//     let sum = 0;
//     while(temp>0){
//         let rem= temp%10;
//         sum = sum*10 + rem;
//         temp = parseInt(temp/10);
//     }
//     if(sum === n){
//         return (n+" is palindrome");
//     }
//     return (n+" is not palindrome");
// }

// console.log(palindrom(121));

//valid trianle
// let trianle = (a,b,c)=>{
//     if(a+b>c && b+c>a && c+a>b){
//         return "It is a valid triangle";
//     }
//     return "Not a valid Triangle";
// }

// console.log(trianle(10,10,50));
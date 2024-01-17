// let obj1 = {
//     name : "Ram",
//     age : 25,
//     city : "jaipur",
//     pin_code: 324005
// }

// console.log(obj1.name,obj1.age);

// for(let i in obj1){
//     // console.log(i);
//     console.log(obj1[i]);
// }





// /////Array of objects

// let newArr = [
//     {
//         name : "ram",
//         age : 25,
//         city : "kota",
//     },
//     {
//         name : "shyam",
//         age : 24,
//         city : "jaipur",
//     },
//     {
//         name : "shiv",
//         age : 28,
//         city : "delhi",
//     },
//     {
//         name : "anshul",
//         age : 15,
//         city : "delhi",
//     },
//     {
//         name : "aakar",
//         age : 16,
//         city : "delhi",
//     },
//     {
//         name : "viyan",
//         age : 6,
//         city : "delhi",
//     },
//     {
//         name : "ankit",
//         age : 14,
//         city : "delhi",
//     }
// ]

// // newArr.forEach(item=>{
// //     console.log(item.name,item.age,item.city)
// // })

// // newArr.map((item)=>{
// //     console.log(item.name,item.age,item.city);
// // })

// ////info of age above 18 years
// // let fltr = newArr.filter((item)=>{
// //     return item.age>=18;
// // })

// // fltr.forEach(item=>{
// //     console.log(item.name,item.age,item.city);
// // })


let myObj = {
    name : "jhon",
    age : 30,
    cars:[
        {name:"Ford",models:["Fiesta","Focus","mustang"]},
        {name:"BMW",models:["320","x3","x5"]},
        {name:"Fiat",models:["500","panda"]},
    ]
}

let arr = myObj.cars;
let car = arr.map((item)=>{
    return item;
})

let opt = car.filter(item=>{
    return item.name=="BMW";
})

let print = opt.map(item=>{
    console.log(item.name);
    item.models.map((d)=>{
        console.log(d);
    })
})
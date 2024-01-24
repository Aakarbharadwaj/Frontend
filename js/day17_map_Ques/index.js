const complexData = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Anytown",
            country: "USA",
        },
        orders: [
            { orderId: "A123", amount: 50.75, status: "completed" },
            { orderId: "B456", amount: 30.25, status: "pending" },
        ],
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        address: {
            street: "456 Oak St",
            city: "Othercity",
            country: "USA",
        },
        orders: [
            { orderId: "C789", amount: 100.5, status: "completed" },
            { orderId: "D012", amount: 75.2, status: "completed" },
        ],
    },
];


// //Ques1. 

// let arr = complexData.map((i) => {
//     // console.log(i.orders)
//     return {
//         Name: i.name,
//         Total_amount: i.orders.reduce((x, y) => {
//             return (x.amount + y.amount);
//         })
//     }
// })
// console.log(arr);

//Ques2. Filter users who have at least one order with a status of 'pending'.

// let arr = complexData.map(i => {
//     i.orders.map(j => {
//         if (j.status == "pending") {
//             console.log(i);
//         }
//     });
// })

////Ques3. Map the array to get an array of objects containing user names and their completed order IDs.

// let arr = complexData.map(i => {

//     return i.orders.map(j => {
//         if (j.status === "completed") {
//             return {
//                 Name: i.name,
//                 Order_id: j.orderId
//             }
//         }
//     })
// })

// console.log(arr);

// //// Ques4. Filter orders with an amount between 30 and 70.
// let arr = complexData.map(i=>{
//     i.filter(j=>{
//         if()
//     })
// })



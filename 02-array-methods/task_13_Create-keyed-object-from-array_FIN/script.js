// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// function groupById(users) {
//     let obj = {};
    
//     for (let i = 0; i < users.length; i++) {
//         obj[users[i].id] = users[i];
//     }
//     console.log(obj);
// }

// let usersById = groupById(users);

// /*
//   // после вызова у нас должно получиться:

// usersById = {
//     john: {id: 'john', name: "John Smith", age: 20},
//     ann: {id: 'ann', name: "Ann Smith", age: 24},
//     pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
//   */



// ----------------------------------------------------



// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// function groupById(users) {
//     users.reduce(function(accum, item) {
//         obj[item.id] = item;
//     }, obj = {});
//     console.log(obj);
// }

// let usersById = groupById(users);

// /*
//   // после вызова у нас должно получиться:

// usersById = {
//     john: {id: 'john', name: "John Smith", age: 20},
//     ann: {id: 'ann', name: "Ann Smith", age: 24},
//     pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
//   */



// ----------------------------------------------------



let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users) {
    users.reduce(function(accum, item, index, array) {
        obj[array[index].id] = item;
    }, obj = {});
    console.log(obj);
}

let usersById = groupById(users);
/*
  // после вызова у нас должно получиться:

usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
  */
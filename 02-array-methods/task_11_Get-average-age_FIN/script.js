// function getAverageAge(arr) {
//     let ageAll = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         ageAll += arr[i].age;
//     };

//     return mid = ageAll / arr.length;
// }

// let john = {name: "John", age: 25};
// let pete = {name: "Pete", age: 30};
// let mary = {name: "Mary", age: 29};

// let arr = [john, pete, mary];

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28



// -----------------------------------------------------------



function getAverageAge(arr) {
    return mid = arr.reduce((start, item) => start + item.age, 0)  / arr.length;
}

let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 29};

let arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
// function unique(arr) {
//     let arrNew = [];

//     for (const item of arr) {
//         if (!arrNew.includes(item)) {
//             arrNew.push(item);
//         }
//     };
//     return arrNew;
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

// console.log(unique(strings)); // Hare, Krishna, :-O



// -----------------------------------------------------------



function unique(arr) {
    let arrNew = [];

    for (const item of arr) {
        let res = arr.indexOf(item);
        if (!arrNew.includes(item)) {
            arrNew.push(arr[res]);
        }
    }
    return arrNew;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(strings)); // Hare, Krishna, :-O
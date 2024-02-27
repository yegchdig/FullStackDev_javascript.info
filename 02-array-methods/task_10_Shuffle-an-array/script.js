// function shuffle(arr) {
//     function sortRandom(a, b) {
//         if ((Math.random() * (a + b)) > (Math.random() * (a + b))) return 1;
//         if ((Math.random() * (a + b)) == (Math.random() * (a + b))) return 0;
//         if ((Math.random() * (a + b)) < (Math.random() * (a + b))) return -1;
//     }

//     let obj = {};

//     for (let i = 0; i < 1000000; i++) {
//         let res = arr.sort(sortRandom);

//         if (!isFinite(obj[res])) {
//             obj[res] = 1;
//         }
//         obj[res] += 1;
//     }

//     for (let key in obj) {
//         console.log(key + " = " + obj[key])
//     }
// }

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...



//--------------------------------------------------------------------------



// function shuffle(arr) {
//     function sortRandom(a, b) {
//         if ((Math.random() * (a + b)) > (Math.random() * (a + b))) return 1;
//         if ((Math.random() * (a + b)) == (Math.random() * (a + b))) return 0;
//         if ((Math.random() * (a + b)) < (Math.random() * (a + b))) return -1;
//     }

//     arr.sort(sortRandom);
// }

//   // подсчёт вероятности для всех возможных вариантов
// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
// };

// for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
// }

//   // показать количество всех возможных вариантов
// for (let key in count) {
//     console.log(`${key}: ${count[key]}`);
// }

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...



//--------------------------------------------------------------------------



// let arr = [1, 2, 3];

// let obj = {};

// for (let i = 0; i < 1000000; i++) {
//     let res = arr.sort(() => Math.random() - 0.5);

//     if (!isFinite(obj[res])) {
//         obj[res] = 1;
//     }
//     obj[res] += 1;
// }

// for (let key in obj) {
//     console.log(key + " = " + obj[key])
// }

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...



//--------------------------------------------------------------------------



// function shuffle(arr) {
//     arr.sort(() => Math.random() - 0.5);
// }

//   // подсчёт вероятности для всех возможных вариантов
// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
// };

// for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
// }

//   // показать количество всех возможных вариантов
// for (let key in count) {
//     console.log(`${key}: ${count[key]}`);
// }

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...



//--------------------------------------------------------------------------



function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

  // подсчёт вероятности для всех возможных вариантов
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

  // показать количество всех возможных вариантов
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}

let arr = [1, 2, 3];

shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
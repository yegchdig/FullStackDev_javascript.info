// function Calculator() {
//     this.calculate = function(str) {
//         this.a = str.slice(0, str.indexOf(' '));
//         this.operator = str.slice(str.indexOf(' ') + 1, str.lastIndexOf(' '));
//         this.b = str.slice(str.lastIndexOf(' ') + 1);

//         switch (this.operator) {
//             case '+':
//                 res = parseFloat(this.a) + parseFloat(this.b);
//                 break;
//             case '-':
//                 res = parseFloat(this.a) - parseFloat(this.b);
//                 break;
//             default:
//                 res = "There is no such action."
//                 break;
//             }
            
//         return res;
//     }
// }

// let calc = new Calculator;
// console.log( calc.calculate("3 + 7") ); // 10



// ----------------------------------------------------------



function Calculator() {
    this.calculate = function(str) {
        this.a = str.slice(0, str.indexOf(' '));
        this.operator = str.slice(str.indexOf(' ') + 1, str.lastIndexOf(' '));
        this.b = str.slice(str.lastIndexOf(' ') + 1);

        switch (this.operator) {
            case '+':
                res = parseFloat(this.a) + parseFloat(this.b);
                break;
            case '-':
                res = parseFloat(this.a) - parseFloat(this.b);
                break;
            default:
                res = "There is no such action."
                break;
            }
            
        return res;
    }

    this.addMethod = function (name, func) {
        switch (name) {
            case "*":
                this.func;
                break;
            case "/":
                this.func;
                break;
            case "**":
                this.func;
                break;
        }
    }
}

let calc = new Calculator;
console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8
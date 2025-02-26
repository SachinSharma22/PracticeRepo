// console.log(age);

// let age = 10;

// Funcrion hoisting works only on plane function like
 
// callMe("Sachin Sharma")

// function callMe(fullName){
//     console.log(fullName);
// }

// When it comes to function expression function hoisting does not work

// sayHello();

// let sayHello = function(){
//     console.log("Hello everyone");
// }

// If object of a class is declare below the class function hoisting work properly
// class Human{

// }

// const obj1 = Human;


// If object of a class is declared before the class declaraction then function hoising not work

// const obj1 = Human;
// class Human{

// }


// Function call stack starts here
// Call stack work on LIFO (Last in First Out)

// function greetMe(greet, fullName){
//     console.log("Hello", fullName);
//     greet();
// }

// function greet(){
//     console.log("Greeting of the day");
// }

// greetMe(greet, "Sachin");

// function solve(number){
//     return function(number){
//         return number * number;
//     }
// }
 
// let ans = solve(5);

// let finalAns = ans(10);
// console.log(finalAns);

/*const arr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
];

let firstAns = arr[0];
let finalFirstAns = firstAns(5,6);
console.log(finalFirstAns);

let secondAns = arr[1];
let finsalSecondAns = secondAns(5,3);
console.log(finsalSecondAns);

let thirdAns = arr[2];
let finalThirdAns = thirdAns(4,5);
console.log(finalThirdAns);
*/

// let obj = {
//     age:25,
//     w:36, 
//     h:122,
//     greet: ()=>{
//         console.log("HEllo Sachin");
//     }
// }

// console.log(obj.age);
// obj.greet();




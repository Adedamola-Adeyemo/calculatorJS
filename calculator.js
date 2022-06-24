const prompt = require("prompt-sync")();

const operations = ["Addition","Subtraction","Multiplication","Division"];

console.log("Hello, we have the following operations: ",operations);
let operation = prompt("Write the operation you want to perform: ").toLowerCase();
if (operation in operations){

let first = parseFloat(prompt("write your first number: "));

let second = parseFloat(prompt("write your second number: "));

function Addition(a,b){
    return a+b;
}
function Subtraction(a,b){
    return a-b;
}
function Multiplication(a,b){
    return a*b;
}
function Division(a,b){
    return a/b;
}
function Modulus(a,b){
    return a%b;
}
if (operation == "addition"){
    console.log(Addition(first,second));
} 
else if (operation == "subtraction"){
    console.log(Subtraction(first,second));
}
else if (operation == "multiplication"){
    console.log(Multiplication(first,second));
}
else if(operation == "division"){
    console.log(Division(first,second));
}

}
else{
    console.log("Invalid operation, please start again and write the correct operation");

}
/*var name = "john";
name = "Blessing";
console.log(name);

let age = 9;
console.log(age);

const color = "red";
console.log(color);
//string
//"mango"
//'apple'
//`pear`
//number
//1
//5
//2.5
//bolean
//true
//false
let login = true;
console.log(login)
//null
let data = null;
console.log(data)
//non-primitive data type
//object
let person = {
    complexion: 'fair',
    size: 5,
    educated: true,
}
console.log(person);
//array


let count = [1, 2, 3, 4, 5]
console.log(count[3])
//array method
//push method
let fruit =["apple","orange","banana"]
fruit.pop()
console.log(fruit)
// pop array method
let fruts = ['banan', 'orang', 'grap'];
fruts.pop()
console.log(fruts)
//shift array method
let cars = ['lorry', 'van', 'truck'];
cars.shift()
console.log(cars)
//unshift array method
let food = ['beans', 'rice', 'stew'];
food.unshift('spag')
console.log(food)
//indexoff array method
let figures = ['two', 'five', 'eight'];
let position = figures.indexOf('eight')
console.log(position)
function grapes() {
    console.log('how many grapes do you want')
}
grapes();
grapes();
grapes();
grapes();
function fruits() {
    console.log('i am twenty six years old')
}
fruits();
fruits();
fruits();
fruits();
//function declaration
function shoe() {
    console.log('buy me a shoe')
}
shoe();
//function expression you have to store it inside a variable
let bag = function() {
    console.log('black')
}
bag();
//arrow function people mostly use it cause is more simple,u also store it in a variable
const plastic = () => {
    console.log('strong')
}
plastic();
//anonymous function
function() {
    console.log('women are beautiful')
}
//Javascript DOM (Document Object Model)
let Sugar = document.getElementById("sweet");
let corn = document.getElementsByClassName("one");
let biscuit = document.getElementsByTagName("p");
let white = document.querySelector("#id")
let white = document.querySelector("p")
let white = document.querySelector("button")
let white = document.querySelector("p")
let white = document.querySelectorAll(".class")*/
//if statement
let age = 20;
if (age >= 65) {
    console.log("you are an adult")
}
//if else statement
let size = 15;
if (size >= 18) {
    console.log("the size is perfect")
}else{
    console.log("the size is not perfect")
}
//else if statement
let score = 85;
if (score >= 90) {
    console.log("A")
}else if (score >= 70){
      console.log("B")
}else if (score >= 50){
    console.log("C")
}
else{
    console.log("you failed")
}
//switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("monday")
        break;
        case 2:
            console.log("tuesday")
            break;
            default:
                console.log("wednessday")
}
let sweet = document.getElementById("s")
sweet.addEventListener("mouseover", function() {
    alert("you click the button");
})
let decoration = document.getElementById("pink")
decoration.textContent = "lovely"
decoration.style.color = "red"
decoration.style.fontsize = "20px"
let flowers = document.createElement("p");
flowers.textContent = "roses";
document.body.appendChild(flowers);

const input = document.getElementById("input")
const output = document.getElementById("output")
input.addEventListener("input",function(){
output.textContent = "Your name: " + input.value;
})

const output2 = document.getElementById("output2")
const input2 = document.getElementById("input2")
const button2 = document.getElementById("button2")
button2.addEventListener("click", function(){
    if(input2.value === ""){
        alert("please enter something")
    }else{
        output2.textContent = input2.value;
    }
})
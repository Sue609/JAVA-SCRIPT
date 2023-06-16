console.log("I love you Susan");
console.log("I want to work hard so that i can become financially stable and therefore be ready to date");
console.log("i am very happy");

//this is a comment.

let firstName = "Susan";
let number = 5;
number = number + 100;
let student = false;

console.log("Hello", firstName)
console.log("You are", number, "years old");
console.log("Are you enrolled in this school?", student)


document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + number + "years old";
document.getElementById("p3").innerHTML = "Are you enrolled in this school? " + student;

let num = 20;
num *= 2;
console.log(num)

let extraStudents = num % 3;
console.log(extraStudents)

let result = 234 * 123 - 456 + 1000 / 23;
console.log(result)

//Accepting users input:

let username;

document.getElementById("myButton").onclick = function(){
    
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello" + username;
};

let age = window.prompt("How old are you?")

console.log(typeof age);
age = Number(age);
console.log(typeof age);

age += 1;
console.log("Happy Birthday! You are", age, "years old.");



let x;
let y;
let z;

x = Number("3.14")
y = String(3.14);
z = Boolean("")

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);



// ARRAYS

let fruits = ["apples", "mangoes", "guavas", "custard apples"];

fruits[0] = "coconuts";

fruits.push("lemon");   //adds an element to the last item

fruits.pop();   //Removes last element from the array

fruits.unshift("pawpaw"); //adds element to beginning

fruits.shift();     //removes first element from the array

let length = fruits.length;

console.log(length);
console.log(fruits);     

let prices = [5, 30, 24, 2, 3, 45];

for(let i = prices.length - 1; i >= 0; i-=1)
{
    console.log(prices[i]);
}

for(let price of prices)
{
    console.log(price)
}


fruits = fruits.sort().reverse();
for(let fruit in fruits)
{
    console.log(fruits[fruit]);
}


//2D ARRAYS

let fruit = ["mango", "oranges", "bananas"];
let vegetables = ["spinach", "cabbage", "celery"];
let meat = ["eggs", "pork", "fish"];

let grocery = [fruit, vegetables, meat];

console.log(grocery);

for(let list of grocery)
{
    for (let food of list)
    {
        console.log(food);
    }
}

let name = "susan kamau";
console.log(...name);  //spread operator(...)

//REST PARAMETERS

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(a + b);

let students = ["susan", "monicah", "ann"];

students.forEach(capitalize);

function capitalize(element, index, array)
{
    array[index] = element[0].toUpperCase() + element.substring(1);
}

console.log(students[0]);

students.forEach(print);
function print(element)
{
    console.log(element);
}


//ARRAY-REDUCE() it reduces he array to a single value.

let price = [4, 3, 8, 9, 23, 46, 2, 12, 24];

let total = price.reduce(checkOut);

console.log(`The total is: $${total}`);

function checkOut(total, element)
{
    return total + element;
}
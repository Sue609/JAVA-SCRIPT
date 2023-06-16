for(let i = 1; i <= 10; i+=1){
    console.log(i);
}
let i = 10;
console.log(i);

let userName = 'Sue';
let items = 3;
let total = 75;

//console.log(`Hello ${userName}`);
//console.log(`You have ${items} items in your cart`)

let text =
`Hello ${userName}<br>
You have ${items} items in your cart.<br>
Your total is $${total}.<br>
`;

document.getElementById("myLabel").innerHTML= text;


let myNum = 34139887.89;
//myNum = myNum.toLocaleString("en-Us");
//console.log(myNum);
myNum = myNum.toLocaleString("hi-IN");
console.log(myNum);
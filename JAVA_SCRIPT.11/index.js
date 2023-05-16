// WHILE LOOP

let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name");
}

console.log("Hello", userName);

// FOOR LOOP

for(let counter = 1; counter <= 10; counter+=2){
    console.log(counter);
}

console.log("HAPPY NEW YEARS!")

// BREAK & CONTINUE

for(let i = 1; i <= 20; i+=1){
    
    if (i == 5){
        continue;
    }

    if (i == 13){
        break;
    }
    console.log(i);
}

//NESTED LOOPS - a loop inside another loop
let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt("Enter number of rows");
let columns = window.prompt("Enter number of columns")

for (let i = 1; i <= rows; i+=1){
    for (let j = 0; j <= columns; j++){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>"
}
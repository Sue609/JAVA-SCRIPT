let a ;
let b;
let c;

/*a = window.prompt("Enter side a: ");
a = Number(a);

b = window.prompt("Enter side b: ");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Side c:", c);
*/

document.getElementById("submitButton").onclick = function(){
    
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("clabel").innerHTML = "Side C: " + c;

}

let grades = [100, 50, 90, 60, 98, 45, 23, 68, 42, 99, 87, 56, 80];

grades = grades.sort(descendingSort);

grades = grades.sort(ascendingSort);

grades.forEach(print);

function descendingSort(x, y)
{
    return y - x;
}

function print(element)
{
    console.log(element);
}

function ascendingSort(x, y)
{
    return x - y;
}

function print(element)
{
    console.log(element);
}


// FUNCTION EXPRESSION
// Function without a name(anonymous function)
// to avoid polluting the global scope.


const greeting = function()
{
    console.log("Hello!");
}

greeting();


let count = 0;

function increaseCount()
{
    count+=1;
    document.getElementById("myLabel").innerHTML= count;
}

function decreaseCount()
{
    count-=1;
    document.getElementById("myLabel").innerHTML= count;
}
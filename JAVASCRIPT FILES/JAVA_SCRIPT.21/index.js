/*
    object - A group of properties and methods 
    propertties - what an object has.
    methods - what an object can do.

    used to access properties methods.
*/



const car = {
    model: "Jeep Mustang",
    color: "black",
    year: 2020,

    drive: function()
    {
        console.log("You drive the car");
    },
    break: function()
    {
        console.log("You step on the bresks");
    }
}

const car1 = {
    model: "Range Rover",
    color: "pink",
    year: 2020,

    drive: function()
    {
        console.log("You drive the car");
    },
    break: function()
    {
        console.log("You step on the bresks");
    }
}
console.log(car.model);
console.log(car1.model);

car.drive();
car.break();


//THIS - it is a keyword to a reference of a perticulary object.
//         the object depends on the immediate context



/*
    CLASS - a blueprint for creating objects
        define what properties and methods they have
        use a constructor for unique properties.

*/
class Player
{
    score = 0;
    pause()
    {
        console.log("You paused the game!");
    }
    exit()
    {
        console.log("You exited the game!");
    }
}
const Player1 = new Player();

Player1.scrore += 1;

console.log(Player1.score);
Player1.pause();


//CONSTRUCTOR
//          - A special method of a class.
//            accepts arguements and assigns properties.

class student
{
    constructor(name, age, gpa)
    {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study()
    {
        console.log(`${this.name} is studying`);
    }
}

const student1 = new student("Spongebob", 30, 4.5);
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);

student1.study();

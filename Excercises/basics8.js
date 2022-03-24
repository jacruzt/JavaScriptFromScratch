//Inheritance is the main pillar in POO
//One class can inherit/acquire the properties, Methods of another class
//The class which inherits the properties of other is known as subclass
//The class whose properties are inherit is known as Superclass

const Person = require('./basics7')

class Pet extends Person
{
    constructor(firstName, lastName)
    {
        //call the parent class contructor
        super(firstName, lastName)
    }

    // get location()
    // {
    //     return 'BlueCross'
    // }
}

let pet = new Pet('Teniente', 'Dan')
pet.fullName()
console.log(pet.location)

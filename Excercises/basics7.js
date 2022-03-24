module.exports = class Person
{
    //constructor is a method which excecutes by default when you create an object of the class
    constructor(firstName, lastName)
    {
        this.fName = firstName
        this.lName = lastName
    }
    age = 25
    //location = 'Canada'
    get location()
    {
        return 'Canada'
    }

    fullName()
    {
        console.log(this.fName + ' ' + this.lName)
    }
}

// let person = new Person('Bruce', 'Wayne')
// let person1 = new Person('Joseph', 'Kerr')
// console.log(person.age)
// console.log(person.location)
//person.fullName()
//person1.fullName()
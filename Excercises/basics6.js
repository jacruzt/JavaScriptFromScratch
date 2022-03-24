//objects is a collection of properties

let person = {
    firstName:'Tim',
    lastName:'Joe',
    age:24,
    fullName: function()
    {
        console.log(this.firstName + this.lastName)
    } 
}

person.fullName()
console.log(person.firstName)
console.log(person['lastName'])
person.gender = 'male'
person.firstName = 'Bruce'
console.log(person)
console.log('gender' in person)
delete person.gender
console.log(person)
console.log('gender' in person)
for (let key in person)
{
    console.log(person[key])
}
//Block of code
//var - global level/funtional
//let - global level/block {}
//const -
const greetings = "Morning"
//greetings = "Nigth"

if(1==1)
{
    let greetings = "Afternoon"
    console.log(greetings)
}

function add(a,b)
{
    var greetings = "Evening"
    return a+b
}

let sum = add(2,3)
console.log(sum)

console.log(greetings)

//Anonymus funtion->Function with no name also could be represented by '=>'

let sumAnonymus = function(c,d)
{
    return c+d
}

let sumAnonymusArrow = (c,d)=>c+d

console.log(sumAnonymus(3,4))
console.log(sumAnonymusArrow(4,5))

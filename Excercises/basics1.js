//Lesson 1: Hello World 
console.log("Hello World! :D")

//These are comments
/*
This
lines
are 
comments
too
*/

//Lesson 2: Variables
let a = 4
console.log(a)
console.log(typeof(a))

let b = 234.7532
console.log(b)
console.log(typeof(b))

let c = 'c'
console.log(c)
console.log(typeof(c))

let required = true
console.log(!required)
console.log(typeof(required))

//var c = a + b //We cannot redeclare variables with 'let' keyboard, but possible with 'var'
c = a + b
console.log(c)
console.log(typeof(c))

/*********************************************
 * | keyword to |              |            |*
 * | declare    | redeclarable | reassigned |*
 * | variable   |              |            |*
 * ------------------------------------------*
 * |   var      |    yes       |    yes     |*
 * ------------------------------------------*
 * |   let      |    no        |    yes     |*
 * ------------------------------------------*
 * |   const    |    no        |    no      |*
 * ------------------------------------------*/

//Lesson 4. Arrays and its methods

var marks = [20, 40, 35, 12, 37, 100]//Simple and still efective
subMarks = marks.slice(2,5)

console.log(marks[2])//should print 35
marks[3] = 14
console.log(marks) //should print [20,40,35,14,37,100]
console.log(subMarks)
console.log(marks.length) //6
marks.push(65)
console.log(marks) //should print [20,40,35,14,37,100,65]
marks.pop() 
console.log(marks) //should print [20,40,35,14,37,100]
marks.unshift(12)
console.log(marks) //should print [12,20,40,35,14,37,100]
console.log(marks.indexOf(100)) //6

//120 in the array?
console.log(marks.includes(120))

var sum = 0
for(let i=0; i<marks.length; i++)
{
    //console.log(marks[i])
    sum = sum + marks[i]
}
console.log(sum)

//reduce filter map
console.log(marks.reduce((sum,mark)=>sum+mark,0))

//even numbers hard way
var scores = [12,13,14,16]
var evenScores = []

for(let i=0; i<scores.length; i++)
{
    if(scores[i]%2 == 0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

//even numbers this is the way
let newFilterEvenScores = scores.filter(score=>score%2==0)
console.log(newFilterEvenScores)

//make a new array with the even scores multiplied by 3 [12,14,16] => [36, 42, 48]

//hard way
var scores = [12,13,14,16]
var evenScores = []

for(let i=0; i<scores.length; i++)
{
    if(scores[i]%2 == 0)
    {
        evenScores.push(scores[i]*3)
    }
}
console.log(evenScores)

//map this is the way
var mppedArray = newFilterEvenScores.map(score=>score*3)
console.log(mppedArray)
console.log(mppedArray.reduce((sum,val)=>sum+val,0))//suma de los números triplicados

//The weed way
var scores = [12,13,14,16]

var sumOfTripletsOfEvenScores = scores.filter(score=>score%2 == 0).map(score=>score*3).reduce((sum,score)=>sum+score,0)
console.log(sumOfTripletsOfEvenScores)

//Sort arrays
var fruits = ["banana", "mango", "pomegrante", "apple"] //Capitals letters are considered previous than te minor ones
console.log(fruits.sort())
console.log(fruits.reverse())

var scores1 = [12,003,16,14]
console.log(scores1.sort()) //=>[12, 14, 16, 3]???
//scores1.sort(function(a,b){
//    return a-b
//}) -> The previous function is also represented on the next way

console.log(scores1.sort((a,b)=>a-b))
console.log(scores1.reverse((a,b)=>a-b))
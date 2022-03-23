//Strings
let day = 'tuesday '
console.log(day.length) //8

let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[1]) //u

let splitDay = day.split("s")
console.log(splitDay)
console.log(splitDay[1].length) //4
console.log(splitDay[1].trim())
console.log(splitDay[1].trim().length)//3

///PARSE
let date = '23'
let nextDate = '27'

let difBetweenDates = parseInt(nextDate) - parseInt(date)
console.log('Dif between dates: ' + difBetweenDates.toString())

let newQuote = day + "is Funday day"
console.log(newQuote)
let val = newQuote.indexOf('day',5)
console.log(val)

//To know how many times is 'day' on the string newQuote
let count = 0
let value = newQuote.indexOf('day')
while(value !== -1)
{
    count++
    value = newQuote.indexOf('day',value+1)
}
console.log(count)

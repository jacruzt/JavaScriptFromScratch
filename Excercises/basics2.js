//Lesson 3: Loops and conditions

const flag = true

if(!flag)
{
    console.log("condition satisfied")
}
else
{
    console.log(flag)
    console.log("condition not satisfied")
}

let i = 0

while(i>10)
{
    i++
    console.log(i)
}

do
{
    i++
} while(i>10);
console.log(i)

for(let k=0;k<=10;k++)
{
    console.log(k)
}

required = true
while(required) 
{
    console.log(required)
    required = false
}

//from 1 to 10, give multiple values of 2 and 5
console.log("Excercise (what I did)")
for(let k=1; k<=10; k++)
{
    if(k%5 == 0)
    {
        console.log(k)
    } else if(k%2 == 0)
    {
        console.log(k)
    }
}

console.log("Excercise (how it was)")
for(let k=1; k<=10; k++)
{
    if(k%2 == 0 || k%5 == 0)
    {
        console.log(k)
    }
}

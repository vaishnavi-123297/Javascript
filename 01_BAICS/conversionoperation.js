{let score = 33
console.log(typeof score);//number
console.log(typeof(score));//number
}
let score = "33"
console.log(typeof score);//string
console.log(typeof(score));//string

let valueinnumber =number(score)
console.log(typeof valueinnumber);//convert string to number
console.log( valueinnumber);//NaN

{


let score = null
console.log(typeof score)// output is 0
}
//if value is true then 1
//false is 0
//if string "hitesh" convert to number it cant so output NaN
//"33" => 33
//"33abs" => NaN
{
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//true 
}
//1=> true  ;0=> false
//"" => false 
//"hitesh" => true 

{
    // let someNumber = 33
    // let stringNumber =String(someNumber)
    // console.log(stringNumber);
    // console.log(typeof stringNumber)
}

//----------oPERATION--------
let value = 3
let negValue = -value
//console.log(negValue);//-3

console.log(2+2);//4
console.log("2"+"2");//22
console.log("Hitesh"+"Chaudhary");//HiteshChaudhary
console.log("2"+2);//22
console.log(2-2)//0
console.log(2*2);//4

let str1 = "Hello"
let str2 = "Hitesh"
let str3 = str1 + " " + str2
console.log(str3);//Hello Hitesh
console.log("1"+ 1 + 1)//111
console.log(1 + 1 + "1")//21
console.log(3 + 4* 5%3)//5

// console.log(+true)//1
// console.log(="")//0
let num1,num2,num3
num1 = num2 = num3 = 2 + 2
console.log(num1,num2,num3);//4 4 4
let gameCounter = 100
++gameCounter;
console.log(gameCounter);//101
//prefix and postfix 


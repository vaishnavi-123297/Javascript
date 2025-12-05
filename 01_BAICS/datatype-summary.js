//Primitive 

//7 types: String ,Number , Boolean , null , undefined ,symbol , BigInt

const score = 100
const scoreValue = "100.5"

const isLoggedIn = false
const outsideTemp = null //object
let userEmail;  //undefined

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);//false

const bigNumber = 900719925474199n
//non primitive datatype
const heros = ["shaktiman","naagraj","doga"]
let myObj={ name : "Hitesh", age:24}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof scoreValue)//string
console.log(typeof myFunction)//function
console.log(typeof heros)//object
console.log(typeof anotherId)//symbol
console.log(typeof myObj)//object

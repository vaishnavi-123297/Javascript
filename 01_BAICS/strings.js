const name = "Hitesh"
const repoCount = 50

//console.log(name + repoCount+ "Value");
console.log(`Hello ${name} you have ${repoCount} repo`);//template string or template literal

const gameName = new String("hiteshhc")//declare string using object
console.log(gameName[0]);
console.log(gameName.__proto__)//gives all methods of string

console.log(gameName.length);//8
console.log(gameName.toUpperCase());//HITESHHC
console.log(gameName.charAt(2));//t
console.log(gameName.indexOf("h"));//first occurence
const newString = gameName.substring(0,4)
console.log(newString);//hite

const anotherString = gameName.slice(-8,4)
console.log(anotherString);//hite

const newStringOne = "   Hitesh Chaudhary   "
console.log(newStringOne.trim());//removes space from starting and ending

const url = "https://hiteshchoudhary.com/"
console.log(url.replace("hitesh","hitesha"));//https://hiteshachoudhary.com/
console.log(url.includes("hitesh"));//true

console.log(url.startsWith("https"));//true
console.log(gameName.split("-",2))//['hiteshhc']

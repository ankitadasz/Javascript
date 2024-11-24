const score = 700;
console.log(score)
const balance = new Number(100);
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(5));

const othernumber = 2123.8966;
console.log(othernumber.toPrecision(4))//overally it will make roundoff value

const number2 = 1000000;
console.log(number2.toLocaleString(/*'en-IN'*/));

//MATHS*****************************************************************
console.log(Math);

console.log(Math.abs(-10));//change -ve value to positive
console.log(Math.round(4.3));//roundoff the value
console.log(Math.ceil(4.00001));//it will tke the highest value after thge decimal point
console.log(Math.sqrt(25));
console.log(Math.max(1,2,3,4,55));

console.log(Math.random()); //it will come between 0 to 1
// simple explanation that I always think about is "Math.random() sirf 0 se 1 tk random number generate krta hai 0 is inclusive, 1 is exclusive....So in this statement Math.random() * 10, the result can never be equal to 10 qki 10 lane k lie usko 1 se mulitply hona pdega jo ki possible nahi hai, to result hmesha 10 se niche hoga (it could be 9.999999) but 10 nhi hoga, or iske upr se agar aap Math.floor(Math.random() * 10) krte ho to result 0 se 9 tk koi bhi integer ho skta hai but 10 nahi, to 10 ko bhi range me include krne k lie hum usme 1 add kr dete hai.....that is if you do Math.floor(Math.random() * 11) to result [0,10] tk aaega both inclusive.....and at last isme bas aap 1 add kr doge to result [1,11] m convert ho jaega....
console.log(Math.floor(Math.random() * 10) + 1); //it will give roundoff value if incase it gives 0 it will give 0 so for that we are adding 1 here

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //to get the numbers in he range we are using this formula so remember this formula
//here 1 is added to increase th range upto 10 because when you are taking the range 0 to 1 o is incluive and 1 is exclusive


function otp(){
    let min=1000000;
    let max=9999999;
    console.log(Math.floor(Math.random() * (max - min + 1) + min));
}
otp();
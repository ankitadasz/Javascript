 const name="Annkita";
 const Repocount=27;
 console.log(name+Repocount);
 console.log(`Hello my name is ${name} and my repo count is${Repocount}`);
 const gamename=new String("ankitadas__ankita__ank")
 console.log(gamename);
 console.log(gamename.__proto__);
 console.log(gamename.toUpperCase());
 console.log(gamename.charAt(5));
 console.log(gamename.indexOf("t"));
 const newString= gamename.substring(-8,4)//dividing into substring
console.log(newString);//printing the characters from 0th indeex to 3rd index 4th will not be included
 


const anotherString=gamename.slice(1,7)
console.log(anotherString);

const newString1="    ankita    ";
console.log(newString1.trim());



const url="https://ankita.com/ankita%20das";
console.log(url.replace('%20','__'));


console.log(url.includes("monkey"));


console.log(gamename.split("__"));

const myname="smrutirekha";
const slicednegative=myname.slice(-11,-1)
console.log(slicednegative)
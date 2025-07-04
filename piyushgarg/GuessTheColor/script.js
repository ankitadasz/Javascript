const colorcode=document.getElementById("color-code");
const option=document.getElementById("option");
const scoreContain=document.getElementById("score");
const op=document.getElementById('op');
const correctMessages = [
  "Correct! 🎉", 
  "Nice pick!😃", 
  "You nailed it!👍🏻", 
  "Perfect match!👌", 
  "Great job! 🎯"
];

const wrongMessages = [
  "Wrong one 🙃", 
  "Oops! Try again.😶", 
  "Not quite...🤔", 
  "That’s not it! 😏", 
  "Missed it!🙄"
];
let randomcolor=null;
let score=0;
function generateRandomNumber(min, max) {
     return min + Math.floor(Math.random() * (max - min + 1));
}

function genrateRandomColorRGB() {
    const red=generateRandomNumber(0,255);
    const green=generateRandomNumber(0,255);
    const blue=generateRandomNumber(0,255);
     return `rgb(${red}, ${green}, ${blue})`;

}
function incrementStore(){
    score+=1;
    scoreContain.innerText=score;
    
}
 function validateResult(el){
   console.log(el.target);
   const selectedColor=el.target.style.backgroundColor;
   if((randomcolor===selectedColor)){
    incrementStore();
     const msg = correctMessages[Math.floor(Math.random() * correctMessages.length)];
    op.innerText = msg;
   }
   else{
     const msg = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
    op.innerText = msg;
   
   }
   localStorage.setItem('score',score)
   startGame() ;
 }
function startGame(){
    score=Number(window.localStorage.getItem('score')) ?? 0;
    scoreContain.innerText=score;
    option.innerHTML=null;
    randomcolor=genrateRandomColorRGB();
    colorcode.innerText=randomcolor;
    
    const ansindex=generateRandomNumber(0,5);

    for(let i=0;i<6;i++){
        const div=document.createElement('div');
        div.addEventListener('click',validateResult);
        div.style.backgroundColor =  i === ansindex ? randomcolor :genrateRandomColorRGB();
        option.append(div);
    }
}
window.addEventListener('load',startGame());
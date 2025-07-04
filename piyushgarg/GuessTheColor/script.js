const colorcode=document.getElementById("color-code");
const option=document.getElementById("option");
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
    document.getElementById("score").innerText=score;
}
 function validateResult(el){
   console.log(el.target);
   const selectedColor=el.target.style.backgroundColor;
   if((randomcolor===selectedColor)){
    incrementStore();
   }
   else{
   score=0;
   }
   window.localStorage('score',score)
   startGame() ;
 }
function startGame(){
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
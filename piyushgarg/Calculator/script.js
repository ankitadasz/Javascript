const input=document.getElementById("num-input");
const Answer=document.getElementById("Ans");


function handleClickButton(el){
    console.log(el.innerText);
    const exp=`${input.value}${el.innerText}`;
    input.value=exp;
    if(['+','-','*','/'].includes(el.innerText)) return;
    Answer.value=eval(exp);
}

function reset(){
    input.value="";
    Answer.value="";
}
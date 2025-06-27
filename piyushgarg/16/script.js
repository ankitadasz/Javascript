const tyme=document.getElementById("time")
function ShowTime(){
    const currentTime=new Date();
    const time=`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    console.log(time);
    tyme.innerText=time;

} 


let interval=setInterval(ShowTime,1000);
const button=document.getElementById("button");
button.addEventListener('click',()=>{
    clearInterval(interval);
})
const button=document.getElementById('clickButton');
const uname=document.getElementById('inputusername');
const username=document.getElementById('username');


button.addEventListener('click',()=>{
    const value=uname.value;
    console.log(value);
    localStorage.setItem('name',value);
    location.reload();//it will refresh the page automatically
});

window.addEventListener('load',()=>{
    const value=localStorage.getItem('name')
    username.innerText=value;
})
// function Adder(num){
//        function add(b){
//         console.log(num+b);
//        }
//        return add;
// }

// const addTo5= Adder(5);
// const addTo10= Adder(10);

// addTo5(2);
// addTo5(20);
// addTo10(20);



const myName=document.getElementById("myName");
const btn=document.getElementById("btn");
// function makeTextSizer(size){
//        function changeSize(){
//              myName.style.fontSize=`${size}px`;
//        }
//        return changeSize;
// }
// const size12=makeTextSizer(12);
// const size20=makeTextSizer(20);
// const size52=makeTextSizer(52);
// const size100=makeTextSizer(100);
// btn.addEventListener("click",size100)



function makeCounter(){
       let count=1;

       function Increment(){
              console.log(count++);
              
       }
       return Increment;
}

const counter1=makeCounter();
counter1();
counter1();

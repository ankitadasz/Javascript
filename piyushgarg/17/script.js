function Adder(num){
       function add(b){
        console.log(num+b);
       }
       return add;
}

const addTo5= Adder(5);
const addTo10= Adder(10);

addTo5(2);
addTo5(20);
addTo10(20);

// // where you declare theparameter is called argument
// // and where you pass the variable is called parameter

// function sayHello(){
//     console.log("hey piyush");
    
// }
// sayHello();

// function add(a,b,c){
//     console.log(a+b+c)
// // }
// //     add(5,2,7)

// function addNumbers(){
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//           sum=sum+arguments[i];
          
//     }
//     return sum;
// }


// let result=addNumbers(1,2,3)
// // console.log(result);
// function mul(a, b){
//    console.log(a*b);
// }
// mul(5,6);


function Add(){
    let sum=0;
    for(let i=0; i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
}
let sum=Add(1,2,3,4,5);
console.log(sum);

function addnum(...num){
    let sum=0;
for(let i=0;i<num.lengthl;i++)
    sum=sum+num[i];
}
return sum;

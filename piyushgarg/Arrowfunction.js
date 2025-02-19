// //Arrow function
// const sayHello = () => {
//       console.log("hello guys");
// };

// sayHello();


// // const add = (a,b) => {
// //     return a+b;
// // }
// // console.log(add(2,5));


// const add = (a,b) => 
//    a+b;

// console.log(add(2,5));

// const addNumbers = (...nums) => {
//     console.log(nums);
// };
// addNumbers(12,23,3,4)

// //hoisting:::
// sayHey();
// function sayHey(){
//     console.log("hello");
    
// // }

// const sayHello = () => {
//     console.log("Hello guys")
// }
// sayHello();

const obj = {
    value:20,
    myFunction: () => {
        console.log("value is:"+this);
        
    },
    };
    obj.myFunction();

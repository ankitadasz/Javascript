function add(a,b){
    return a+b;
}
function mul(...args){
    return args[0]*args[1];
}

function square(val){
    return val*val;
}
function addSquare(a,b){
    return square(add(a,b));
}
// console.log(addSquare(2,3));

// function composeTwoFunction(fn1,fn2){
//     return function(a,b){
//         return fn2(fn1(a,b));
//     };
// }

function  compose(...fns){
    return function(...values){
         return fns.reduce((a,b) => b(a),values )
    }
}
const composeAll=(...fns) => (...val) => fns.reduce((a,b) => b(a),val);
const c2f=(fn1,fn2)=>(a,b)=>fn2(fn1(a,b));

const task=composeAll(mul,square);
console.log(task(2,3));

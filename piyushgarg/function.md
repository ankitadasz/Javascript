function addNumbers(...numbers){

 let sum=0
    for(let i=0;i<numbers.length;i++){
          sum=sum+numbers[i];
          
    }
    return sum;
}
let result= addNumbers(1,2,3,4,5,6)
console.log(result)
here.... is known as spread operator
it will 
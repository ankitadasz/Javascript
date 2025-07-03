// for (const val of [1,2,3,4,5]){
//     console.log(val);   
// }
//Custom Iterator Function
function makeIterator(start=0,end=Infinity,step=1){
    let nextStart=start;
    let IterationCount=0;
    return{
        next(){
            let result;
            if(IterationCount<end){
                result={value: nextStart , done:false};
                nextStart=nextStart+step;
                IterationCount++;
                return result;
            }
            return { value:IterationCount,done:true}
        }
    };
}
const myIterator = makeIterator(1,10,2);
let result=myIterator.next();

while(!result.done){
    console.log(result.value);
    result=myIterator.next();
    
}

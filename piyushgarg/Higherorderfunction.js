function add (a,b,cb){
  let result=a+b;
  cb(result);
}
//add function is a high order function
add(2,4,function (v){
  console.log(v);
  
});
const mysymbol=Symbol("key1")
const my_Info = {
   [ mysymbol ]:"My Key",
    name:"Ankita Das",
    job:"Web Developer",
    age:21,
    email:"daszankita23@gmail.com"
}
// console.log(my_Info["name"])
// console.log(my_Info.name)
// console.log(typeof my_Info[mysymbol]);

// my_Info.name="sunita Das"
// console.log(my_Info["name"]);
// Object.freeze(my_Info)

// my_Info.name="sunita mohanty Das"
// console.log(my_Info);

my_Info.greeting= function(){
    console.log("Hello google employee");
    
}
my_Info.greetingTwo = function(){
    console.log(`Hello google employee , ${this.name}`);
    
}
console.log(my_Info.greeting());
console.log(my_Info.greetingTwo());

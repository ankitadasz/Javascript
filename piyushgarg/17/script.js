function init(name){
    function displayName(){
        console.log(name);
    }
    return displayName;
}
let op=init("piyush");
op();

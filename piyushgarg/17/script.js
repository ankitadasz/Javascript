function init(){
    const name="ankita";
    function displayName(){
        console.log(name);
    }
    return displayName;
}
let op=init();
op();

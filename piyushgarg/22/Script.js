function loadScript(src,callback){
    const script=document.createElement('script')
    script.src=src;
    script.onload=()=> callback(null,script)
    script.onerror = (err) => callback(err);

    document.head.appendChild(script);

}

loadScript("test.js",(err,script)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Script Loaded");
        
    }
});
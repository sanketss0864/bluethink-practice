const helper=()=>{
    const promise=new Promise(
        function(resolve,reject){
            const n=1;
    setTimeout(()=>{
        if(n===0){
            resolve("status ok")
                    }
                    else{
            reject("status not ok")
                    }
    },2000)
    
        }
    );
    return promise;
}
async function status(){
try{
let message=await helper();
console.log(message)
}
catch(e){
    console.log("some error as occured"+" "+e )
}
}
status()
const promise=new Promise(
    function(resolve,reject){
        const n=1;
setTimeout(()=>{
    if(n===0){
        resolve()
                }
                else{
        reject()
                }
},1000)// we can cange the time here in ms according to our need

    }
)
promise.then(
    ()=>{
        console.log("status ok")
    }
).catch(
    ()=>{
console.log("status not")
    }
)
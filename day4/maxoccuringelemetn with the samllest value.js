let a=new Map()
let arr2=[];
// arr=[18,23,17,26,16,3,28,28,10,17,44,28,2,20,22,21,18,36,34,37,18,38,20,1,31,17,20,6,27,37,11,24,39,7,3,9,36,31,16,46,27,13,6,9,13,28,9,31,44,43,1,15,35,21,42,45,38,41,4,18,32,15,22,3,1,25,38,37,36,34,15,16,0,22,4,39,29,14,3,5,10,4,20,24];
arr=[2,2,1,2]
for(i=0;i<=arr.length-1;i++){
    count=0
    for(j=0;j<=arr.length-1;j++){
if(arr[i]==arr[j]){
    count=count+1
    a.set(arr[i],count)
    // console.log(arr[i])
}
    }
}
    // let result=a.keys()
    // for(item of result){
    //     arr2.push(item)
    // }
    // console.log(a)
    for([key,value] of a){
    
        arr2.push(key)
    }
   
let val=0
    let result=arr2.sort((a,b)=>a-b)
    let ob=result[result.length-1]
    for([key,value] of a){
        if(value>=val){
            console.log(val)
            console.log(value)
            console.log(key)
           if(key<ob){
            val=value
            ob=key
           }
        }
        // console.log(key+":"+value)
        // arr2.push(key)
    }
   
    // console.log(ob)

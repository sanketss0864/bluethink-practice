function hasArrayTwoCandidates(arr,n,x){
    for(let i=0;i<x;i++){
        console.log("i",i)
        for(let j=0;j<x;j++){
            console.log("j",j)
if(arr[i]+arr[j]==x){
    return "yes"
}
        }
    }
    return false
}
let arr=[1,2,3,4,5,6]
n=5;
x=10;
console.log(hasArrayTwoCandidates(arr,n,x))
function getOddOccurrence(arr,n){
    //code here
    const a=new Map()
    arr2=[];
    for(i=0;i<arr.length;i++){
        count=0
        for(j=0;j<arr.length;j++){
if(arr[j]==arr[i]){
    count =count+1
    a.set(arr[i],count)
}
        }
    }
    let key=0
    let value=0
    let val=0
    let result=""
for([key,value] of a){
if(value%2==0){

}
else{
    val=value;
    result=key;
   
}
}
console.log(result)
return result

}
// let arr=[8,4,4,8,23];
let arr=[1]
n=arr.length
getOddOccurrence(arr,n)
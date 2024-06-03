arr=[1,2,3,4,6,7]
function evenno(arr){
    let arr2=[]
for(i=0;i<=arr.length;i++){
if(arr[i]%2===0){
    arr2.push(arr[i])
}
}
return arr2
}
console.log(evenno(arr))
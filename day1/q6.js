function sumofallelement(arr){
    let count=0;
    for(i=0;i<=arr.length-1;i++){
count=count+arr[i]
    }
    return count
}
function positiveno(arr){
let arr2=[];
for(i=0;i<=arr.length-1;i++){
    if(arr[i]>=0){
arr2.push(arr[i])
        }
}
return sumofallelement(arr2)
}
function result(arr){
return positiveno(arr)
}
arr=[-1,2,4]

console.log(result(arr))
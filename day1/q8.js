let arr=[1,2,3,5]
function sumofallelement(arr){
    let count=0;
    for(i=0;i<=arr.length-1;i++){
count=count+arr[i]
    }
    return count
}
function average(arr){
let result=sumofallelement(arr)/arr.length;
return(result)
}
console.log(average(arr))
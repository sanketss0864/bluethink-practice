function maximum(arr){
    let count;
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            count=arr[i];
        }
        else if(arr[i]<arr[i+1]){
            count=arr[i+1];
        }
    }
    return count;
}
arr=[1,2,3,5,6,10]
console.log(maximum(arr))
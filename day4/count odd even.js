function countOddEven(arr,n){
    //Your code here
    let odd=0;
    let even=0;
    for(let i=0;i<n;i++){
        if(arr[i]%2==0){
            even=even+1;
        }
        else{
            odd=odd+1;
        }
    }
    return (odd+" "+even)
}
console.log(countOddEven([1,2,3,4,5],5))
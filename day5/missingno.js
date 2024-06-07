function missingNumber(n, arr)
{
    let count=0;
    let arr2=[];
   for(i=1;i<=n;i++){
    if(arr.includes(i)){
    }
    else{
        return i
    }
 
   }
return 0
}
n=5
arr=[1,2,3,5]
console.log(missingNumber(n,arr))
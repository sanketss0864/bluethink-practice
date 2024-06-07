function print(arr,n){
    let arr2=[]
    for(let i=0;i<=n-1;i+=2){
      arr2.push(arr[i])
    }
     return arr2
  }
  arr=[1,2,3,4]
  n=arr.length;
  console.log(print(arr,n));

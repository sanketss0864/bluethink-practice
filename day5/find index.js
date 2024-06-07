function findIndex(arr,n,key){
    let count=[]
  for(let i=0;i<arr.length;i++){
if(arr[i]==key){
    count.push(i)
}
  }
return (count[0]+""+count[count.length-1])
 }

 arr=[1,2,3,4,5,5]
 n=6;
 k=5;
 console.log(findIndex(arr,n,k))
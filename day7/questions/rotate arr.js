function rotateArr(arr, d, n){
    // code here
    let arr2=[];
for(let i =0;i<d;i++){
   arr2.push(arr.shift())
}
return arr.concat(arr2)
}
arr=[1,2,3,4,5]
n=5
d=2
console.log(rotateArr(arr, d, n))
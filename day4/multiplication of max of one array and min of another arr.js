function find_multiplication(a,n,b,m){
    //code here
    let max=a.reduce((acc,cur)=>Math.max(acc,cur))
     let min=b.reduce((acc,cur)=>Math.min(acc,cur))
  
    return max*min
}
a=[1,2,3,4,5,7]
b=[-1,2,-3,-10]
n=0;
m=0;
console.log(find_multiplication(a,n,b,m))
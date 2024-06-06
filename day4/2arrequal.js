function check(A,B,N){
    // code here
    A.sort()
    B.sort()

   for(let i=0;i<=N;i++){
    if(A[i]!=B[i]){
        return 0
    }
  
   }
   return 1
}
A=[8,9,7,5,3,1]
B=[5,4,2,5,1,7]
N=6
console.log(check(A,B,N))
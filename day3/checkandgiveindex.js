function search(arr, N, X) {
    // write your code here
    for(let i=0;i<=N;i++){
        if(arr[i]===X){
            return i
        }
    }
    return -1
}
arr=[1,2,3,4,5]
N=5;
X=3
console.log(search(arr, N, X))


function search(n, k, arr) {
    // code here
    for(let i=0;i<n;i++){
        if(arr[i]==k){
            return i
        }
    }
    return -1
}
arr=[1,2,3,4,5,7]
n=6;
k=7;
console.log(search(n,k,arr))
function reverseWord(str){
    //Your code here
    str=String(str)
    let count="";
    for(let i=str.length;i>=0;i--){
        count=count+str.charAt(i)
    }
    return count
}
function checkpallindrome(n){
if(n==reverseWord(n)){
    return true
}
else{
    return false
}
}
function result(arr){
    let count=0;
for(i=0;i<=arr.length-1;i++){
if(checkpallindrome(arr[i])){
count=count+1
}
}
if(count==arr.length){
    return 1
}
else{
    return 0
}
}
arr=[111,222,333,444,555]
console.log(result(arr))
// console.log(reverseWord(111))
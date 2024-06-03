// arr=[1,2,3,4,5];
// function reverse(arr)
// {
// let arr2=[]
// for(i=arr.length-1;i>=0;i--){
//     arr2.push(arr[i])
// }
// return arr2
// }
// console.log(reverse(arr))

// for array

let message="hellow world"
function reversestring(message){
let reversemessage="";
for(i=message.length;i>=0;i--){
reversemessage=reversemessage+message.charAt(i)
}
return reversemessage
}
console.log(reversestring(message))
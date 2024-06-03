function reversestring(message){
    let count=""
for(i=message.length-1;i>=0;i--){
count=count+message.charAt(i)
}
return count
}
let message="hello"
console.log(reversestring(message))


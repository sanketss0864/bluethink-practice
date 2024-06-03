
function primeno(n){
let count=0;
for(i=0;i<=n;i++){
if(n%i===0){
count=count+1;
}
}
if(count>2){
    return "not prime"
}
else{
    return "is prime"
}
}
let n=7;
console.log(primeno(n))
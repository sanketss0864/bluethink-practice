function powerof2(n){
for(i=0;i<=n/2;i++){
if(Math.pow(2,i)===n){
return true
}
}
return false
}
console.log(powerof2(5000000))

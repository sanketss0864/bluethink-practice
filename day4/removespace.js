function modify(s){
   let message=""
for(let i=0;i<=s.length;i++){
    if(s.charAt(i)!=0){
message=message+s.charAt(i);
    }
}
console.log(message) 
}
 modify("  h e ll o")

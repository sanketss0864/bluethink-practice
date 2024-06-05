function reverseWord(str){
    //Your code here
    let count="";
    for(let i=str.length;i>=0;i--){
        count=count+str.charAt(i)
    }
    return count
}
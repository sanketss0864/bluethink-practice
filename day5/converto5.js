function convertFive(num)
{
    let count=""
     num=num.toString()
    for(let i=0;i<num.length;i++)
    {
   if(num.charAt(i)==0){
count=count+5
   }
   else{
    count=count+num.charAt(i)
   }
    }
    return count
}
console.log(convertFive(100))
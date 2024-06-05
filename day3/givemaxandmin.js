

arr=[3,2,1,56,1000,167]
max=arr.reduce((acc,cur)=>{return Math.max(acc,cur)},0);
//0 is the accumulator intial value
min=arr.reduce((acc,cur)=>{return Math.min(acc,cur)});
console.log("Max:"+max)
console.log("Min:"+min)
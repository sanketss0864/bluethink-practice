n = 7
arr = [1,2,3,4,5]
d = 2
let count=[]
for(let i=0;i<d;i++){
count.push(arr.shift())
}
let a=arr.concat(count)
console.log(a)
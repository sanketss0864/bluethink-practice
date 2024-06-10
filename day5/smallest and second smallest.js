let arr=[12,10,10]
let a =new Set(arr)
let arr2=[]
for(item of a){
    arr2.push(item)
}
arr2.sort((a,b)=>a-b)
console.log( arr2[0]+""+arr2[1])


//or

// let a =new Set(arr)
// let arr2=[]
// for(let item of a){
//     arr2.push(item)
// }
// arr2.sort((a,b)=>a-b)
// if(arr2.length<2){
    
//     return -1
// }
// console.log( arr2.slice(0,2))
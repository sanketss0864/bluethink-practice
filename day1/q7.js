function reuiredlength(arr){
    let count=[];
    for(i=0;i<=arr.length-1;i++){
        if(arr[i].length>5){
            count.push(arr[i])
        }
    }
    return count
}

let arr=["hello","worlde"]
console.log(reuiredlength(arr))
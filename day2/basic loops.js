//for in loop
const obj = {
    name: "John",
    age: 30,
    job: "developer"
  };
  for(const key in obj){
    console.log(key+":"+obj[key])
  }

  //for of loop
  const arr=[1,2,3,4,5]
for(item of arr){
    console.log(item)
}
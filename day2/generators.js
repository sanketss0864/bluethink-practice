// function* generatorsequence(){
//     yield 1;
//     yield 2;
//     yield 3;
//     return 4;//when we run it 4 times it reaches to return and the function ends
// }
// let generator=generatorsequence();
// let one=generator.next();
// let two=generator.next();
// let three=generator.next();
// let four=generator.next();
// let five=generator.next();

// console.log(JSON.stringify(one))
// console.log(JSON.stringify(two))
// console.log(JSON.stringify(three))
// console.log(JSON.stringify(four))
// console.log(JSON.stringify(five))

// function* generatorsequence(){
//     yield 1;
//     yield 2;
//     return 3 // here we get only one and 2 we dont get 3 because on 3 the generator funcition gets done we can correct it by changing it to yield 3;
// }
// let generator = generatorsequence();
// for(i of generator){
//     console.log(i)
// }
// function* generatorsequence(){
//     yield 1;
//     yield 2;
//     yield 3 
// }
// let generator = [0,...generatorsequence()];
// for(i of generator){
//     console.log(i)
// }

//we can call another generator inside a generator an pass value to it

// function* gen2(name){
// yield `value provided by anothe generator ${name}`
// }
// function* gen(name){
// yield `hi ${name}`
// yield gen2(name).next().value
// yield `bye ${name}`
// }
// let a =gen("ram")
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)


// function* gen2(name){
// yield `value provided by another generator ${name}`
// }
// function* gen(name){
// yield `hi ${name}`
// yield* gen2(name)
// yield `bye ${name}`
// }
// let a =gen("ram")
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)


// function* gen(){

//     console.log(yield)
//     console.log(yield)
//     console.log(yield)
// }

// let a =gen()
// a.next()
// a.next("shiv")
// a.next("ram")
// a.next("shyam")


// function* gen(){
// yield* [1,2,3,4]
// }
// const a=gen();
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)

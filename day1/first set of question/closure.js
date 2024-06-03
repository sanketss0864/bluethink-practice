// let a="this is the outside message"
// function message(){
//     a="this is the message inside the function"
//     console.log(a)
// }
// message()

//so in javascript we can use the local variable instead of the global variable 


// function message(){
//     console.log(a)
// }
// message()

//or according to our need we can also acces the global value

// let counter =0;
// function add(){
//     counter++;
// }
// add()
// add()
// add()
// console.log(counter)
// function add(){
//     let counter=0;
//     function plus(){
// counter+=1;
//     }
//     plus()
//     return counter
// }
// console.log(add())

// const add=(function(){
//     let counter=0;
// return function (){
//      counter+=1;
//      return counter;
// }
// })();
// add()
// add()
// console.log(add())

// a=10
// let a
// console.log(a)
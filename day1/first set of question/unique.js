const num_set = new Set([10, 20, 20, 20]);
let a=[];
for (let value of num_set.values()) {
  a.push(value)
}
console.log(a)
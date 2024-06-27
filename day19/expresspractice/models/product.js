// const products=[];
const fs = require("fs");
const path = require("path");
const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json"
  );
const getProductsFromFile=(cb)=>{

    fs.readFile(p,(err,fileContent)=>{
        if(err){
         cb([])
        }
        else{
            cb(JSON.parse(fileContent));
        }
    })
}
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    // products.push(this);
    getProductsFromFile(products=>{
        products.push(this)
        fs.writeFile(p,JSON.stringify(products),(err)=>{
          console.log('error',err)
        })
    })
    // const p = path.join(
    //   path.dirname(process.mainModule.filename),
    //   "data",
    //   "products.json"
    // );
    fs.readFile(p,(err,fileContent)=>{
    //   let products=[]
    //   if(!err){
    //     products=JSON.parse(fileContent)
    //   }
     
    } 
    )
  }
  static fetchAll(cb) {
    getProductsFromFile(cb)
  }
};

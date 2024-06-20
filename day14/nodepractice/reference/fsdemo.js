const path=require('path')
const fs=require('fs')

//create a folder
fs.mkdir(path.join(__dirname,'/test'),{},(err)=>{
    if(err) throw err
console.log("folder created.....")    
});

//create a file and write data to it

fs.writeFile(path.join(__dirname,'/test',"hello.txt"),"helloworld",(err)=>{
    if(err) throw err
console.log("file created.....")    
});

fs.writeFile(path.join(__dirname,'/test',"hello.txt"),"helloworld",(err)=>{
    if(err) throw err
console.log("file created.....")    
});

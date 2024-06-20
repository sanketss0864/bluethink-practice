const path=require('path')
//basefilename
console.log("base file name:",path.basename(__filename));
//directory name
console.log("directory name:",path.dirname(__filename));
//file extension name
console.log("Extension name:",path.extname(__filename));
//create path object
console.log("path object:",path.parse(__filename));
//Concatenate paths
console.log("joined path:",path.join(__filename,"test",'hello.html'))
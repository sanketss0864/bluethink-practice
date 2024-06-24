const fs=require('fs')


module.exports.requestHandler=(req,res)=>{
// console.log(req.url,req.method,req.headers)
const url=req.url;
const method=req.method;
console.log(url)
if(url=="/"){
  res.setHeader('Content-Type','text/html');
  res.write("<html>")
  res.write("<head><title>first page</title></head>")
  res.write('<body><h1>this is the new user form</h1><form action="/create-user" method="POST"> <input type="text" name="username"><button type="submit">send</button></form></body>')
  res.write("</html>")
  return res.end() 
}
if(url=='/user'){
  res.setHeader('Content-Type','text/html');
  res.write("<html>")
  res.write("<head><title>first page</title></head>")
  res.write('<body><ul><li>user 1</li><li>user 2</li><li>user 3</li><li>user 4</li><li>user 5</li></ul></body>')
  res.write("</html>")
  return res.end() 
}
if (url =="/create-user" && method==="POST"){
  const body=[]
  req.on('data',(chunk)=>{
    // console.log("chunk",chunk)
body.push(chunk);
  })
 return req.on('end',()=>{
const parsedBody=Buffer.concat(body).toString();
const message=parsedBody.split('=')[1]
console.log("username",message)
fs.writeFileSync("message.txt",message,err=>{
  res.statusCode=302;
  res.setHeader("location",'/')
   return res.end();
})

  })


}
res.setHeader('Content-Type','text/html');
res.write("<html>")
res.write("<head><title>first page</title></head>")
res.write("<body><h1>hello world</h1></body>")
res.write("</html>")
res.end()
}


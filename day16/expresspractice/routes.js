const fs=require('fs')


const requestHandler=(req,res)=>{
// console.log(req.url,req.method,req.headers)
const url=req.url;
const method=req.method;
console.log(url)
if(url=="/"){
  res.setHeader('Content-Type','text/html');
  res.write("<html>")
  res.write("<head><title>first page</title></head>")
  res.write('<body><form action="/message" method="POST"> <input type="text" name="message"><button type="submit">send</button></form></body>')
  res.write("</html>")
  return res.end() 
}
if (url =="/message" && method==="POST"){
  const body=[]
  req.on('data',(chunk)=>{
    console.log("chunk",chunk)
body.push(chunk);
  })
 return req.on('end',()=>{
const parsedBody=Buffer.concat(body).toString();
const message=parsedBody.split('=')[1]
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

exports={requestHandler};
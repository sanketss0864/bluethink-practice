const http=require('http');
const express=require('express')

const app=express()
user={
    "name":"rohit",
    "company":"bt"
}
app.use((req,res,next)=>{
console.log("inside the middleware")
next();//allows the request to continue to next middleware
})

app.use((req,res,next)=>{
    console.log("inside another middleware")

next()
    })
    app.use("/user",(req,res,next)=>{
        res.send(user)
        })
app.use("/",(req,res,next)=>{
res.send("<h1>This is the default index page</h1>")

})

 
app.listen(3000);
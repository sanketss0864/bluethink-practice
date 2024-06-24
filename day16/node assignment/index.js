const http=require('http');
const routes=require('./routes')

const server=http.createServer(function (req,res){
routes.requestHandler(req,res)
});
 
server.listen(3000); 
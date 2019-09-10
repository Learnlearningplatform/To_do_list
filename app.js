var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
fs.readFile('index.html',function(err,data){
  res.writeHead(200,{'content':'text/html'});
  res.write(data);
  res.end();
});
}).listen(4000);

console.log("server on port 4000");

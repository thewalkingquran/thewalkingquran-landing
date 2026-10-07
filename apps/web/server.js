const http = require('http')
const port = Number(process.env.PORT || 3000)
http.createServer((req,res)=>{res.writeHead(200,{'content-type':'text/html; charset=utf-8'});res.end('<h1>Hosting Advisor Monorepo test PASS</h1>')}).listen(port,'0.0.0.0')

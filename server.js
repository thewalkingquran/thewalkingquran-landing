const http=require('http')
const value=process.env.HA_TEST_VALUE
if(!value){console.error('HA_TEST_VALUE is required');process.exit(1)}
const port=Number(process.env.PORT||3000)
http.createServer((req,res)=>{res.writeHead(200,{'content-type':'text/html; charset=utf-8'});res.end('<h1>Hosting Advisor ENV test PASS: '+value+'</h1>')}).listen(port,'0.0.0.0')

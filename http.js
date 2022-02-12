
const http = require('http')

const server = http.createServer((req,res)=> {
if (req.url === '/'){
    res.end('wencole to this First Back page')
}
if(req.url === '/about') {
   res.end('Hrere is our histry class')
}
else 
res.end(' <h1> Oops! </h1>  <p>We cannot find this page</p> <a href= '/'> Back home</a>')

})

server.listen(4500)



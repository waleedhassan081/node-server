const http = require('http')
const server = http.createServer( (req,res) => {
    console.log(req.url)
    res.end('Hello Node.js')
} )
const port=3000
server.listen(port,() => console.log(`app is listening at port ${port}`))
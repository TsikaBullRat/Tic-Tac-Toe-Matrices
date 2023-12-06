//What I know

/* Server imports */
const { createServer } = require("http")
const { createReadStream } = require("fs")
const { join, extname } = require("path")

/* Build 1 */

createServer(( req, res ) => {

    /* Resources required */
    let public = join(__dirname, "public", req.url === "/"?"index.html":req.url)
    let extension = extname(public)
    let content = "text/html"

    /* Switch case for different files */
    switch(extension){
        case '.css':
            content = 'text/css'
            break
        case '.js':
            content = 'text/javascript'
            break
        default:
            content = 'text/html'
            break
    }

    res.writeHead(200, {"Content-Type":content})
    createReadStream(public).pipe(res)

}).listen(4444)



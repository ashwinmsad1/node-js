const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome')
        res.end()
        return
    } if (req.url === '/about') {
        res.write('About')
        res.end()
        return
    }
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
    <h1>OOps</h1>
    <p>No found</p>
    <a href='/'>back home</a>
    `)
})

server.listen(5000)
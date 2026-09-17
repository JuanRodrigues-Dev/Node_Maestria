const http = require('http')
const fs = require('fs')
const url = require('url')
const porta = 3000

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true)
    const fileName = q.pathname === '/' ? 'index.html' : q.pathname.substring(1)

    if (!fileName.includes('.html')) {
        return fs.readFile('404.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' })
                return res.end('Página não encontrada')
            }

            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    }

    if (fs.existsSync(fileName)) {
        return fs.readFile(fileName, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' })
                return res.end('Erro ao carregar arquivo')
            }

            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    }

    return fs.readFile('404.html', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            return res.end('Página não encontrada')
        }

        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })
})

server.listen(porta, () => {
    console.log(`Servidor Rodando na porta ${porta}`)
})
const http = require('http')
const fs = require('fs')
const porta = 3000

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if (!name) {
        fs.readFile('index.html', function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' })
                return res.end('Erro ao ler a página')
            }

            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    } else {
        const nameNewLine = name + '\r\n'

        fs.appendFile('arquivo.txt', nameNewLine, function (err) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' })
                return res.end('Erro ao salvar o nome')
            }

            res.writeHead(302, { location: '/' })
            return res.end()
        })
    }
})

server.listen(porta, () => {
    console.log(`Servidor Rodando na porta ${porta}`)
})
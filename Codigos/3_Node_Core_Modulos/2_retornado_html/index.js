const http = require('http')
const porta = 3000
const server = http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Contenty-Type' , 'text/html')
    res.end('<h1>Ola este e meu primeiro server com html</h1><p>testando atualizacao</p>')
})

server.listen(porta,()=>{
    console.log(`Servidor Rodando na porta ${porta}`)
})
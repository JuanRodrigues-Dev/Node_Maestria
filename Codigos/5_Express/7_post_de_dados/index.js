const express = require('express')
const app = express()
const port = 3000 // variavel de ambiente

const path = require('path')

const basePath = path.join(__dirname,'templates')

//ler o body 

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.get('/users/add',(req,res)=>{
    res.sendFile(`${basePath}/usersform.html`)
})

app.post('/users/save',(req,res)=>{
    console.log(req.body)

    const name = req.body.name
    const idade = req.body.age

    console.log(`O nome do usuario é ${name} e ele tem ${idade} anos`)
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id

    //leitura da tabela user, regatar usuario do banco de dados
    console.log(`Estamos buscando o usuario do id : ${id}`)
    res.sendFile(`${basePath}/users.html`)

})

app.get('/',(req,res)=>{

    res.sendFile(`${basePath}/index.html`)
    
})


app.listen(port,()=>{
    console.log(`App rodando na porta ${port}`)
})

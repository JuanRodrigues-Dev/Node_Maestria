const express = require('express')
const router = express.Router()

const path = require('path')

const basePath = path.join(__dirname,'../templates')

router.get('/add',(req,res)=>{
    res.sendFile(`${basePath}/usersform.html`)
})

router.post('/save',(req,res)=>{
    console.log(req.body)

    const name = req.body.name
    const idade = req.body.age

    console.log(`O nome do usuario é ${name} e ele tem ${idade} anos`)
})

router.get('/:id',(req,res)=>{
    const id = req.params.id

    //leitura da tabela user, regatar usuario do banco de dados
    console.log(`Estamos buscando o usuario do id : ${id}`)
    res.sendFile(`${basePath}/users.html`)

})

module.exports = router
const path = require('path')

console.log(path.resolve('arquivo.txt'))

const midFolfder = "relatorios"
const fileName= "matheus.txt"

const finalPath = path.join("/",'arquivos',midFolfder,fileName)

console.log(finalPath)
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linhuagem favorita?', (language)=>{
    console.log(`A minha linguagem favirita e ${language}`)
    readline.close()
})
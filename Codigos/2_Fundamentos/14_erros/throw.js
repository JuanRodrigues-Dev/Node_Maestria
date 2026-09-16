const x = 10

//checar se x e numero
if(!Number.isInteger(x)){
    throw new Error('O valor de x nao e um nteiro')
}

console.log ('continuando o cogigo')
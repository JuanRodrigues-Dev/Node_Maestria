const chalk = require('chalk').default

const nota = 8

if (nota >= 7) {
    console.log(chalk.bgGreen.white('Parabens Voce passsou'))
} else {
    console.log(chalk.bgRed.black('Voce reprovou tera que refazer'))
}
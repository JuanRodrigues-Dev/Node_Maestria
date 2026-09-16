const inquirer = require('inquirer').default

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota'
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota'
    },
]).then((answers) => {
    console.log(answers)
    const media = (parseInt(answers.p1, 10) + parseInt(answers.p2, 10)) / 2
    console.log(media)
}).catch((err) => console.log(err))
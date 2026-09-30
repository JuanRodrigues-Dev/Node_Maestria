const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {
    const itens = ["Item A","Item B", "Item C"]
    res.render('dashboard', {itens : itens})
})

app.get('/', (req, res) => {
    const user = {
        name: 'Juan',
        surname: "Rodrigues",
        age: 20
    }

    const palavra = 'Teste'

    const auth = true

    const aprroved = false

    res.render('home', { user: user, palavra, auth, aprroved })
})



app.listen(3000, () => {
    console.log('API rodando na porta 3000')
})

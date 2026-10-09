const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', exphbs.engine())
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {
    const itens = ["Item A","Item B", "Item C"]
    res.render('dashboard', {itens : itens})
})

app.get('/post',(req,res)=>{
    const post ={
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo cai te ajudar a aprende Node',
        comments : 4
    }
    res.render('blogpost', {post:post})
})

app.get('blog',(req,res)=>{
    const posts =[
        {
            
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Este artigo cai te ajudar a aprende Node',
            comments : 4
        },
        {
            title: 'Aprender Phyton',
            category: 'JavaScript',
            body: 'Este artigo cai te ajudar a aprende Node',
            comments : 4
        },
        {
            title: 'Aprender PHP',
            category: 'JavaScript',
            body: 'Este artigo cai te ajudar a aprende Node',
            comments : 4
        }
    ]

    res.render('blog', {posts:posts})
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

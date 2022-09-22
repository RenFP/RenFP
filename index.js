const express = require('express')
const app = express()
const PORT = 3000;
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')



// Configs
    //Template Engine
    app.engine('handlebars', engine());
    app.set('view engine', 'handlebars');
    app.set("views", "./views")

    //Body Parser
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
   
// Rotas
    app.get('/carteira', (req, res) => {
        Post.findAll().then((posts) => {
            res.render('carteira', { posts: posts })
        })

    })

    app.get('/formulario', (req, res) => {
        res.render('formulario')
    })

    //Recebimento do formulário
    app.post('/addform', (req, res) => {
        Post.create({
            ativo: req.body.ativo,
            data: req.body.data,
            quantidade: req.body.quantidade,
            precomedio: req.body.preco   
        }).then( () =>{
            res.redirect('./carteira')

        }).catch((err) => {
            console.log(`Houve um erro no envio do formulário: ${err}`)
        })
    })
    
    //Deletar postagem
    app.get('/deletar/:id', async (req, res) => {
        Post.destroy({where: {'id': req.params.id}}).then(() => {
            res.send('Post deletado com sucesso')
        })        
    })

app.listen(PORT, () => {
    console.log(`Servidor rodando na rota: http://localhost:${PORT}`)
})
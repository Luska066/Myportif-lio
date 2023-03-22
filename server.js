
//Pegando pacote
const express = require('express')
const path = require('path')

const path = path();
const app = express();



app.set('view engine', 'ejs')


app.get('/',(req,res) => {
    res.render('pages/pageHomes/home');
})

app.get('/store',(req,res) =>{
    const items = [
        {
            title: "Designer GitHub",
            imageLocal : "",
            Message : "Meu primeiro Projeto Responsivo com HTML e CSS"
        },
        {
            title: "Login Technology",
            imageLocal : "",
            Message : "Loja de produtos tecnologicos, desenvolvido durante o processo da Capgemini"
        },
        {
            title: "Biju Sales App",
            imageLocal : "",
            Message : "Uma Página de vendas de bijuteria criado no Angular"
        },
        {
            title: "Anime Br Project",
            imageLocal : "",
            Message : "Meu primeiro projeto com Manipulação de DOM"
        }, 
    ]
    res.render('pages/pageStore/store', {
        qualitys: items,
    })
})

app.get('/stores0',(req,res) =>{
    const items = [
        {
            title: "Designer GitHub",
            imageLocal : "",
            Message : "Meu primeiro Projeto Responsivo com HTML e CSS"
        }
    ]
    res.render('pages/store1',{ 
        qualitys: items,
        link:"https://luska066.github.io/designergithub/",
    })
})

app.get('/stores1',(req,res) =>{
    const items = [
        {
            title: "Login Technology",
            imageLocal : "",
            Message : "Loja de produtos tecnologicos, desenvolvido durante o processo da Capgemini"
        },
    ]
    res.render('pages/store1',{ 
        qualitys: items,
        link:"https://luska066.github.io/Projeto-Angular1/",
    })
})

app.get('/stores2',(req,res) =>{
    const items = [
        {
            title: "Biju Sales App",
            imageLocal : "",
            Message : "Uma Página de vendas de bijuteria criado no Angular"
        },
    ]
    res.render('pages/store1',{ 
        qualitys: items,
        link:"https://luska066.github.io/biju-sales-app/",
    })
})

app.get('/stores3',(req,res) =>{
    const items = [
        {
            title: "Anime Br Project",
            imageLocal : "",
            Message : "Meu primeiro projeto com Manipulação de DOM"
        },
    ]
    res.render('pages/store1',{ 
        qualitys: items,
        link:"https://luska066.github.io/AnimesBrProject/",
    })
})

app.get('/contact',(req,res) => {
    res.render('pages/contact')
})

app.get('/admin',(req,res) => {
    res.render('pages/pageAdmin/admin')
})

app.use(express.static(path.join(__dirname, "public")));

app.listen(8080)
console.log('Server Rodando em http://localhost:8080/')

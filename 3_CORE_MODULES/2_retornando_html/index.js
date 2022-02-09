const http = require('http') // Importando o módulo http

const port = 3000 // Criado uma constante para a porta

const server = http.createServer((req, res)=>{
    res.statusCode = 200 // Retornando um status code
    res.setHeader('Content-Type', 'text/html') // setando o retorno como uma tag html
    res.end('<h1>Hello world!</h1>') // O que vai aparecer na tela

})

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}...`)
}) // "Ouvindo a porta"
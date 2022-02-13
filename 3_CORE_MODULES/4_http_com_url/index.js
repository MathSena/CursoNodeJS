const http = require('http') // Importando o módulo http

const port = 3000 // Criado uma constante para a porta

const server = http.createServer((req, res) => {
  const urlInfo = require('url').parse(req.url, true)
  const name = urlInfo.query.name
  res.statusCode = 200 // Retornando um status code
  res.setHeader('Content-Type', 'text/html') // setando o retorno como uma tag html

  if (!name) {
    res.end(
      '<h1> Preencha um nome: </h1><form method="GET"><input type="text" name="name" /><input type="submit" value="Enviar" /></form>'
    )
  } else {
    res.end(`<h1>Seja bem-vindo ${name}</h1>`)
  }
})

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}...`)
}) // "Ouvindo a porta"

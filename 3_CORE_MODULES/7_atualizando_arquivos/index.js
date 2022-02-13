const http = require('http') // Importando o módulo http
const fs = require('fs')
const port = 3000 // Criado uma constante para a porta

const server = http.createServer((req, res) => {
  const urlInfo = require('url').parse(req.url, true)
  const name = urlInfo.query.name

  if (!name) {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  } else {
    const nameNewLine = name + '\r\n' // Garantir que a atualização ocorrerá em qualquer sistema operacional

    fs.appendFile('arquivo.txt', nameNewLine, function (err, data) {
      res.writeHead(302, {
        location: '/'
      })

      return res.end()
    })
  }
})

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}...`)
}) // "Ouvindo a porta"

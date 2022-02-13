const http = require('http') // Importando o módulo http
const fs = require('fs')
const port = 3000 // Criado uma constante para a porta

const server = http.createServer((req, res) => {
  fs.readFile('index.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    return res.end()
  })
})

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}...`)
}) // "Ouvindo a porta"

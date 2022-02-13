const fs = require('fs')

const artArquivo = 'arquivo.txt'
const novoArquivo = 'novo.txt'

fs.rename(artArquivo, novoArquivo, function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('arquivo renomeado')
})

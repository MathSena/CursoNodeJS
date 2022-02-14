const path = require('path')


// path absoluto
console.log(path.resolve('teste.txt'))


const midFolder = "Relatório"
const filename = "matheus.txt"

const finalPath = path.join("/", 'arquivos', midFolder, filename)


console.log(finalPath)
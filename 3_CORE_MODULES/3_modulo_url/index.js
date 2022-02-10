const url = require('url')

const address = 'http://www.meusite.com.br/catalog/?produtos=cadeira'

const parsedUrl = new url.URL(address)


console.log(parsedUrl.host) // Pega o hostname do site
console.log(parsedUrl.pathname) // Pega o caminho do site
console.log(parsedUrl.search) // Pega a busca do site
console.log(parsedUrl.searchParams) // Pega a busca com um retorno melhor
console.log(parsedUrl.searchParams.get('produtos')) // Pega algo especifico na busca
console.log(parsedUrl) // Todas as informações

const fs = require('fs')


console.log('inicio')

fs.writeFile("arquivo_sincrono.txt", "Olá", function(err){
    setTimeout(function(){
        console.log('Arquivo Criado!')
    }, 1000)

})

console.log('Fim')
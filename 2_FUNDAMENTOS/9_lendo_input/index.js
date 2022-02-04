const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})


readLine.question("Qual a sua linguagem de programação preferida? ", (language)=>{
    console.log(`A minha linguagem preferida é: ${language}`)
    readLine.close()
})


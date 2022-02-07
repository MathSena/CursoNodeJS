const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
    name: 'p1',
    message: 'Qual o seu nome?',
}, {
    name: 'p2',
    message: 'Qual a sua idade?',
},]).then((answers)=>{
    console.log(chalk.bgYellow.black(`Seu nome é ${answers.p1} e sua idade é de ${answers.p2} anos`))
}).catch((err)=> console.log(`Erro: ${err}`))
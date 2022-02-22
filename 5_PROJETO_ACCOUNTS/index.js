// modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

// módulos internos
const fs = require('fs')

operation()

function operation() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
          'Criar conta',
          'Consultar Saldo',
          'Depositar',
          'Sacar',
          'Sair'
        ]
      }
    ])
    .then(answer => {
      const action = answer['action']

      if (action === 'Criar conta') {
        createAccount()
      } else if (action === 'Consultar Saldo') {
        getAccountBalance()
      } else if (action === 'Depositar') {
        deposit()
      } else if (action === 'Sacar') {
        //createAccount()
      } else if (action === 'Sair') {
        console.log(chalk.bgBlue.black('Obrigado por utilizar nossos serviços'))
        process.exit()
      }

      console.log(action)
    })
    .catch(err => console.log(err))
}

// Create an account

function createAccount() {
  console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco'))
  console.log(chalk.green('Defina as opções da sua conta a seguir'))

  buildAccount()
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Digite um nome para a sua conta: '
      }
    ])
    .then(answer => {
      const accountName = answer['accountName']

      console.info(accountName)

      if (!fs.existsSync('accounts')) {
        fs.mkdirSync('accounts')
      }
      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black('Essa conta já existe, defina um novo nome')
        )
        buildAccount()
        return
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance" : 0}',
        function (err) {
          console.log(err)
        }
      )

      console.log(chalk.green('Parabéns, conta criada'))
      operation()
    })
    .catch(err => console.log(err))
}

// add an amount to the account
function deposit() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Qual o nome da conta?'
      }
    ])
    .then(answer => {
      const accountName = answer['accountName']
      // Verify if account exists

      if (!checkAccount(accountName)) {
        return deposit()
      }

      inquirer
        .prompt([
          {
            name: 'amount',
            message: 'Qual o valor que você deseja depositar? '
          }
        ])
        .then(answer => {
          const amount = answer['amount']

          //add amount to account
          addAmount(accountName, amount)

          operation()
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(
      chalk.bgRed.black('Essa conta não existe, escolha um novo nome')
    )
    return false
  }

  return true
}

function addAmount(accountName, amount) {
  const accountData = getAccount(accountName)

  if (!amount) {
    console.log(chalk.bgRed.black('Ocorreu um erro, tente novemente'))
    return deposit()
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err)
    }
  )
  console.log(
    chalk.green(`Foi depositado a quantia de R$: ${amount} na sua conta`)
  )
}

function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: 'utf-8',
    flag: 'r'
  })

  return JSON.parse(accountJSON)
}

// show account balance

function getAccountBalance() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
      }
    ])
    .then(answer => {
      const accountName = answer['accountName']

      if (!checkAccount(accountName)) {
        return getAccountBalance()
      }
      const accountData = getAccount(accountName)

      console.log(
        chalk.bgBlue.black(
          `Olá, o saldo da sua conta é de R$${accountData.balance}`
        )
      )

      operation()
    })
    .catch(err => console.log(err))
}

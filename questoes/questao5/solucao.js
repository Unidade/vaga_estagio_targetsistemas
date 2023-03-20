import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'

const rl = readline.createInterface({ input, output })

function receber_string() {
  rl.question('Digite uma string para ser invertida: ', (answer) => {
    console.log(`A string invertida é: ${reverseString(answer)}`)
    rl.question('Deseja inverter outra string? (s/n): ', (answer) => {
      if (answer === 's') {
        receber_string()
      } else {
        rl.close()
        process.exit(0)
      }
    })
  })
}

receber_string()

export function reverseString(string) {
  let reversedString = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i]
  }
  return reversedString
}

import * as readline from 'node:readline'
import { exit, stdin as input, stdout as output } from 'node:process'

const rl = readline.createInterface({ input, output })

let numero

function receber_input_numero() {
  rl.question('Digite um número: ', (answer) => {
    numero = Number(answer)
    if (Number.isInteger(numero)) {
      if (numero_pertence_a_sequencia_Fibonacci(numero)) {
        console.log(`O numero ${numero} pertence a sequência Fibonacci`)
        rl.close()
        return exit(0)
      } else {
        console.log(
          `O numero ${numero} não pertence a sequência Fibonacci. Tente Novamente`
        )
      }
    } else if (Number.isNaN(numero)) {
      console.log(`${answer} não é um número. Tente novamente.`)
    } else {
      // É um número real, logo não pertence a sequência Fibonacci
      console.log(
        `O numero ${answer} não pertence a sequência Fibonacci. Tente novamente.`
      )
    }
    receber_input_numero()
  })
}
receber_input_numero()

export function numero_pertence_a_sequencia_Fibonacci(number) {
  let n = 0
  while (Fibonacci(n) <= number) {
    if (Fibonacci(n) === number) {
      return true
    }
    n++
  }
  return false
}

function Fibonacci(n, cache = {}) {
  if (n <= 1) return n
  if (cache[n]) return cache[n]
  return (cache[n] = Fibonacci(n - 1, cache) + Fibonacci(n - 2, cache))
}

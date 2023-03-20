import { numero_pertence_a_sequencia_Fibonacci } from './solucao.js'

describe('numero pertence a sequencia de Fibonacci:', function () {
  it('não pertence', function () {
    expect(numero_pertence_a_sequencia_Fibonacci(4)).toBe(false)
    expect(numero_pertence_a_sequencia_Fibonacci(7)).toBe(false)
    expect(numero_pertence_a_sequencia_Fibonacci(11)).toBe(false)
    expect(numero_pertence_a_sequencia_Fibonacci(-2)).toBe(false)
    expect(numero_pertence_a_sequencia_Fibonacci(45)).toBe(false)
  })

  it('pertence', function () {
    expect(numero_pertence_a_sequencia_Fibonacci(0)).toBe(true)
    expect(numero_pertence_a_sequencia_Fibonacci(1)).toBe(true)
    expect(numero_pertence_a_sequencia_Fibonacci(2)).toBe(true)
    expect(numero_pertence_a_sequencia_Fibonacci(3)).toBe(true)
    expect(numero_pertence_a_sequencia_Fibonacci(5)).toBe(true)
    expect(numero_pertence_a_sequencia_Fibonacci(8)).toBe(true)
    expect(numero_pertence_a_sequencia_Fibonacci(13)).toBe(true)
    expect(numero_pertence_a_sequencia_Fibonacci(21)).toBe(true)
    expect(numero_pertence_a_sequencia_Fibonacci(233)).toBe(true)
    expect(numero_pertence_a_sequencia_Fibonacci(2584)).toBe(true)
  })
})

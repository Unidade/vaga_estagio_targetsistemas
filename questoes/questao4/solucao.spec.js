import { equação_horaria_caminhão, equação_horaria_carro } from './solucao.js'

describe('equação horária do caminhão:', function () {
  it('velocidade média', function () {
    expect(equação_horaria_caminhão(1e5 / (80 / 3.6) + 10 * 60)).toBe(0)
  })
})

describe('equação horária do carro:', function () {
  it('velocidade média', function () {
    expect(equação_horaria_carro(1e5 / (110 / 3.6))).toBe(1e5)
  })
})

describe('cruzamento de equações horárias:', function () {
  it('tempo', function () {
    let t = 0
    while (equação_horaria_carro(t) < equação_horaria_caminhão(t)) {
      t++
    }
    // keep in mind floating point precision
    expect(equação_horaria_caminhão(t).toPrecision(2)).toBe(
      equação_horaria_carro(t).toPrecision(2)
    )

    expect(t).toBe(1994)

    const posição_carro_cruzamento = (
      equação_horaria_carro(t) / 1000
    ).toPrecision(2) // em km
    const posição_caminhao_cruzamento = (
      equação_horaria_caminhão(t) / 1000
    ).toPrecision(2) // em km

    expect(posição_carro_cruzamento).toBe(posição_caminhao_cruzamento)
  })
})

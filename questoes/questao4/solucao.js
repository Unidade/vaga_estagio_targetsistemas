// t in seconds
export const equação_horaria_carro = (t) => {
  const velocidade_média = 110 / 3.6 // km/h => m/s
  return velocidade_média * t // Carro começa no ponto 0
}

// t in seconds
export const equação_horaria_caminhão = (t) => {
  // é necessário adicionar os 10 minutos de atraso do caminhão nos pedágios para achar sua velocidade média
  const tempo_gasto_em_pedágios = 10 * 60 // 10 minutos em segundos
  const tempo_gasto_sem_atraso_para_chegar_a_franca = 1e5 / (80 / 3.6)
  const tempo_total_gasto =
    tempo_gasto_em_pedágios + tempo_gasto_sem_atraso_para_chegar_a_franca
  const velocidade_média = 1e5 / tempo_total_gasto //  100km(= 1e5 metros) é o total de distância percorrida no percurso

  return 1e5 - velocidade_média * t // Utilizando ribeirão preto como referência, logo o caminhão começa no ponto 100km e vai para o ponto 0km
}

let t = 0
// cruzamento de equações horárias é quando o carro e o caminhão estão na mesma posição
// enquanto não se cruzarem, incrementa o tempo
while (equação_horaria_carro(t) < equação_horaria_caminhão(t)) {
  t++
}

const t_minutos = t / 60
const t_horas = t / 3600

console.log(
  `tempos em segundos: ${t}s\ntempo em minutos: ${t_minutos.toPrecision(
    2
  )}m\ntempo em horas: ${t_horas.toPrecision(2)}h`
)

const posição_cruzamento = equação_horaria_carro(t) / 1000 // em km
console.log(`posição do cruzamento: ${posição_cruzamento.toFixed(1)}km`)
console.log('Ambos estão igualmente distantes de Ribeirão Preto')

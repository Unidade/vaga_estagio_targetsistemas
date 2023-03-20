import { spawn } from 'child_process'
import { promisify } from 'util'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const readdir = promisify(fs.readdir)

const QUESTOES_DIR = path.join(__dirname, 'questoes')

console.log(
  `Rodando todas as soluções presentes no diretório: ${QUESTOES_DIR}. Algumas questões foram resolvidas sem o uso de um script de execução, portanto, algumas questões não serão executadas, mas possuem a solução no arquivo solucao.md.`
)
console.log()

async function run() {
  try {
    const files = await readdir(QUESTOES_DIR)
    for (const file of files) {
      const SOLUTION_FILE = path.join(QUESTOES_DIR, file, 'solucao.js')
      if (fs.existsSync(SOLUTION_FILE)) {
        console.log(`\nRodando a solução da ${file}...`)
        const childProcess = spawn('node', [SOLUTION_FILE])
        // pipe process.stdin to the child process's stdin
        process.stdin.pipe(childProcess.stdin)
        // pipe child process's stdout to process.stdout
        childProcess.stdout.pipe(process.stdout)
        // wait for child process to exit before moving on to the next one
        await new Promise((resolve, reject) => {
          childProcess.on('exit', (code) => {
            if (code === 0) {
              resolve()
            } else {
              reject(new Error(`Child process exited with code ${code}`))
            }
          })
        })
      }
    }
    console.log('\nTodas as soluções foram executadas com sucesso!')
  } catch (err) {
    console.error(err)
  }
}

run()

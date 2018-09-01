
const opts = {
  base: {
    demand: true, //que sea obligatorio
    alias: 'b',
    describe: 'base para multiplicar'
  },
  limite: {
    alias: 'l',
    default: 10,
    describe: 'limite al multiplicar'
  }
}
const argv = require('yargs')
  .command('listar','Imprime en consola tabla de multiplicar',opts)
  .command('crear', 'Crea archivo de tabla de multiplicar', opts)
  .help()
  .argv;

module.exports = {
  argv
}
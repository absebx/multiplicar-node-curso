const {argv} = require('./config/yargs')
const colors = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar'); //destructuración ya que lo que devuelve es un objeto con propiedades que son funciones

let comando = argv._[0];

switch(comando){
  case 'listar':
    console.log('listar');
    listarTabla(argv.base, argv.limite)
      .catch( err => console.log('Error al realizar la operacion: ', err));
    break;
  case 'crear':
    console.log('crear');
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log('archivo creado:', `${archivo}`.green))
      .catch(err => console.log('Error al generar archivo:', err));
    break;
  default:
    console.log('Comando no reconocido');
}
const argv = require('yargs')
.command('listar','Imprime en consola tabla de multiplicar',{
  base: {
    demand: true, //que sea obligatorio
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
})
.help()
.argv;
// tipos de require
// const fs = require('fs'); //proyecto propio de node
// const fs = require('express'); //paquete externos, no nativos
// const fs = require('./arch'); //archivos que creamos nosotros
// const multiplicar = require('./multiplicar/multiplicar');
const {crearArchivo} = require('./multiplicar/multiplicar'); //destructuración ya que lo que devuelve es un objeto con propiedades que son funciones

let argv2 = process.argv; //sacar argumentos
// let parametro = argv[2];
// let base = parametro.split('=')[1]; //separar elementos
console.log(argv.base);
console.log(argv.limite);

// crearArchivo(base)
//   .then(archivo => console.log(`archivo creado ${archivo}`))
//   .catch(err => console.log('Error al generar archivo:', err));
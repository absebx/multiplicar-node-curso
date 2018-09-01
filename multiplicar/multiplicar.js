const fs = require('fs');
const colors = require('colors'); //require por cada librería

let listarTabla = (base,limite = 10)=>{
  return new Promise((resolve, reject)=>{
    if(!Number(base)){
      reject(`Valor introducido '${base}' no es un número`);
      return;
    }
    if(!Number(limite)){
      reject(`Valor introducido '${limite}' no es un número`);
      return;
    }
    console.log(`---------------------------`.red)
    console.log(`Tabla de ${base}`.red.bold);
    console.log(`--------------------------`.red)

    for(let i = 1; i <= limite; i++){
      console.log(`${base} * ${i} = ${base*i} `);
    }

    resolve(true);
  });
}

let crearArchivo = (base, limite = 10)=>{
  return new Promise((resolve, reject)=>{

    if(!Number(base)){
      reject(`Valor introducido '${base}' no es un número`); //después del reject 
      return;
    }

    let data = '';

    for(let i = 1; i <= limite; i++){
      data += `${base} * ${i} = ${base*i} \n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err)
        reject(err)
      else
        resolve(`tabla-${base}-al-${limite}.txt`)
    });
  });
}

module.exports = {
  crearArchivo,
  listarTabla 
  //ya que tiene el mismo valor no es necesario ponerlo
}

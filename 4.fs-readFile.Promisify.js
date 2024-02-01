const fs = require('node:fs');
const { promisify } = require('node:util');

const readFilePromises = promisify(fs.readFile);

console.log('Leyendo el primer archivo...');
// Seeguirá con las demás instrucciones en lugar de detenerse
readFilePromises('./archivo.txt', 'utf-8').then((text) => {
  console.log('Primer texto:', text);
}); // (nombre del archivo, codificacion).promesa

console.log(' -----> Haciendo cosas mientras lee el archivo ...');

console.log('Leyendo el segundo archivo ...');
readFilePromises('./archivo2.txt', 'utf-8').then((text) => {
  console.log('Segundo texto:', text);
}); // (nombre del archivo, codificacion).promesa

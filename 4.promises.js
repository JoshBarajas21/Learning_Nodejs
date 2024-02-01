const fs = require('node:fs/promises');

console.log('Leyendo el primer archivo...');
// Seeguirá con las demás instrucciones en lugar de detenerse
fs.readFile('./archivo.txt', 'utf-8').then((text) => {
  console.log('Primer texto:', text);
}); // (nombre del archivo, codificacion).promesa

console.log(' -----> Haciendo cosas mientras lee el archivo ...');

console.log('Leyendo el segundo archivo ...');
fs.readFile('./archivo2.txt', 'utf-8').then((text) => {
  console.log('Segundo texto:', text);
}); // (nombre del archivo, codificacion).promesa

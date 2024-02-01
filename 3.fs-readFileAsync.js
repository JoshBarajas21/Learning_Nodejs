const fs = require('node:fs');

console.log('Leyendo el primer archivo...');
// Seeguirá con las demás instrucciones en lugar de detenerse
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  //  <---- ejecutas el callback una vez acabes de leerlo
  console.log('Primer texto:', text);
}); // (nombre del archivo, codificacion, callback())

console.log(' -----> Haciendo cosas mientras lee el archivo ...');

console.log('Leyendo el segundo archivo ...');
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('Segundo texto:', text);
}); // (nombre del archivo, codificacion, callback())

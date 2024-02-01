const path = require('node:path');

// --> unix /
// --> windows \
console.log(path.sep); // sierve para ver la forma de separar en mi SO

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
// content/subfolder/text.txt --> windows

console.log('Ruta:', filePath);

const base = path.basename(filePath);
console.log('Nombre del fichero en ruta:', base);

const fileName = path.basename(base, '.txt'); // --> el 2do param da solo el nombre
console.log('Nombre del fichero sin extension:', fileName);

const extension = path.extname(base);
console.log('Extensión del fichero:', extension);

const ext = path.extname('./4.fs-readFileAsync.js'); // --> sabe cuando no es extensión
console.log('Extensión del archivo "./4.fs-readFileAsync.js"', ext);

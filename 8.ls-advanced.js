// importando los módulos de node:[fs/promises, path]
const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

// el folder lo sacaré del segundo argumento, si no existe tal -> tomará el raiz
const folder = process.argv[2] ?? '.'

// funcion de listar contenido asíncrono
async function ls (folder) {
  let files
  try {
    // Primero intento leer el folder,
    // aquí se hace de forma secuencial
    files = await fs.readdir(folder)
  } catch (error) {
    // si no se puede lo expongo y termino el proceso
    console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`))
    process.exit(1)
  }

  // devolvemos todas las promesas de los archivos,
  // map es un callback, y además asignando Async se hace en paralelo
  const filesPromises = files.map(async (file) => {
    // a cada file mapeado se le da su path completo
    const filePath = path.join(folder, file)
    let stats
    try {
      // se intenta leer la información de cada archivo
      stats = await fs.stat(filePath) // status --> información del archivo
    } catch {
      // si no, entonces lo informo y termino el proceso
      console.error(`No se pudo leer el archivo: ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const filetType = isDirectory ? 'd' : 'f' // si es directorio d, si no, f
    const fileSize = stats.size.toString() // se devuelve el tamaño en bytes
    const fileMoidified = stats.mtime.toDateString() // se devulve la fecha de modificacion

    return `${pc.magenta(filetType)} ${pc.blue(file.padEnd(25))} ${pc.green(
      fileSize.padStart(10)
    )} ${pc.yellow(fileMoidified)}`
    // se retornan los datos de cada archivo leido,
    // y padEnd o padStart es para mejorar la legibilidad
  })

  const filesInfo = await Promise.all(filesPromises)
  // se recogen los datos del mapeo y se imprimen
  filesInfo.forEach((fileInfo) => console.log(fileInfo))
}

ls(folder)

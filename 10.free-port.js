// Importación del módulo net de Node.js para la creación de servidores TCP
const net = require('node:net')

// Definición de la función findAvailablePort que busca un puerto disponible para la comunicación de red
function findAvailablePort(desiredPort) {
  // Retorna una promesa para manejar el resultado de la búsqueda del puerto
  return new Promise((resolve, reject) => {
    // Creación de un servidor TCP
    const server = net.createServer()

    // Intento de escuchar en el puerto deseado
    server.listen(desiredPort, () => {
      // Cuando el servidor está escuchando, obtenemos el puerto
      const { port } = server.address()

      // Cerramos el servidor y resolvemos la promesa con el puerto obtenido
      server.close(() => {
        resolve(port)
      })
    })

    // Manejo de errores en caso de que el puerto esté en uso
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // Si el puerto está en uso, volvemos a llamar a findAvailablePort con un puerto 0
        // Esto intentará encontrar un puerto disponible
        findAvailablePort(0).then((port) => resolve(port))
      } else {
        // Si hay otro tipo de error, rechazamos la promesa con el error
        reject(err)
      }
    })
  })
}

// Exportación de la función findAvailablePort para que esté disponible en otros módulos
module.exports = { findAvailablePort }

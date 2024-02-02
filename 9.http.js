// Importación del módulo http de Node.js para crear servidores web
const http = require('node:http')

// Importación de la librería picocolors para colores en la consola
const pc = require('picocolors')

// Importación de la función findAvailablePort desde el archivo './10.free-port'
const { findAvailablePort } = require('./10.free-port')

// Creación de un servidor HTTP que responde con 'Hola Mundo' a todas las solicitudes
const server = http.createServer((req, res) => {
  // Registro de la recepción de la solicitud en la consola, coloreado en verde
  console.log(pc.green('📬 request received'))
  // Envío de la respuesta al cliente con el mensaje 'Hola Mundo'
  res.end('Hola Mundo')
})

// Busca un puerto disponible a partir del puerto 3000 y comienza a escuchar en él
findAvailablePort(3000).then((port) => {
  server.listen(port, () => {
    // Registro en la consola que el servidor está escuchando en el puerto dado, coloreado en azul
    console.log(pc.blue(`👂🏻 server listening on port http://localhost:${port}`))
  })
})

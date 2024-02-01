import {
  platform,
  release,
  arch,
  cpus,
  freemem,
  totalmem,
  uptime
} from 'node:os'

console.log('Información del Sistema Operativo')
console.log('------------------')

console.log('Nombre del Sistema Operativo', platform())
console.log('Versión del Sistema Operativo', release())
console.log('Arquitectura', arch())
console.log('CPUs', cpus()) // <--- vamos a poder escalar procesos en Node
console.log('Memoria Libre', freemem() / 1024 / 1024)
console.log('Memoria Total', totalmem() / 1024 / 1024)
console.log('uptime', uptime() / 60 / 60)

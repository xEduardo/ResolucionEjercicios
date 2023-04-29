const datos = {
  nombre: 'Eduardo',
  apellido: 'León',
  edad: new Date().getFullYear() - 2000,
  altura: 167,
  isDeveloper: true
}
const edad = datos.edad
const array = new Array(
  datos,
  {
    nombre: 'Jorge',
    apellido: 'Cruz',
    edad: 25,
    altura: 170,
    isDeveloper: false
  }
)
const ordenados = array.sort((a, b) => b.edad - a.edad)

console.log(ordenados)
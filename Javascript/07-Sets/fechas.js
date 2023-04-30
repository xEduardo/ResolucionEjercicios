const hoy = new Date()
const fechaNacimiento = new Date(2000, 1, 24)

const masTarde = hoy > fechaNacimiento

const diaNacimiento = fechaNacimiento.getDate()
const mesNacimiento = fechaNacimiento.getMonth() + 1
const anyoNacimiento = fechaNacimiento.getFullYear()
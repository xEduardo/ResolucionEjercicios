const nombre = "Eduardo";
const apellido = "León";
const estudiante = nombre.concat(" ", apellido);
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const letras = estudiante.length;
const primeraLetraNombre = estudiante[0];
const ultimaLetraApellido = apellido[apellido.length - 1];
const estudianteSinEspacios = estudiante.replace(/\s+/g, "");
const siNombreEstaEnEstudiante = estudiante.includes(nombre);

console.log(nombre);
console.log(apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(letras);
console.log(primeraLetraNombre);
console.log(ultimaLetraApellido);
console.log(estudianteSinEspacios);
console.log(siNombreEstaEnEstudiante);

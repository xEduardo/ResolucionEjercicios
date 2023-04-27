const compras = ["Pan", "Leche", "Cafe", "Huevos", "Azucar"];
compras.push("Aceite de Girasol");
compras.pop();
const peliculas = [
  {
    titulo: "Blood In Blood Out",
    director: "Taylor Hackford",
    fecha: new Date(1993, 3, 16),
  },
  {
    titulo: "Mosul",
    director: "Matthew Michel Carnahan",
    fecha: new Date(2019, 8, 4),
  },
  {
    titulo: "Straight Outta Compton",
    director: "F. Gary Gray",
    fecha: new Date(2015, 9, 9),
  },
];
const peliculasPost = peliculas.filter(
  (valor) => valor.fecha < new Date(2010, 0, 1)
);
const directores = peliculas.map((valor) => valor.director);
const titulos = peliculas.map((valor) => valor.titulo);
const direct_titulos = directores.concat(titulos);
const direct_titulos2 = [...directores, ...titulos];

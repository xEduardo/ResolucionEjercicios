let f = 10,
  m = 1,
  r = 1;
while (true) {
  if (m > f) {
    break;
  }
  r *= m;
  m++;
}
console.log(r); // Resultado factorial de 10 3628800

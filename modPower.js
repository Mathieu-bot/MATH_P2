function modPower(a, b, n) {
  let result = 1;
  a = a % n;
  while (b > 0) {
    if (b % 2 === 1) {
      result = (result * a) % n;
    }
    a = (a * a) % n;
    b = Math.floor(b / 2);
  }
  return result;
}


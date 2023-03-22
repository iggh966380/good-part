function add(a, b) {
  return a + b;
}

const arr = [3, 4];
const sum = add.apply(null, arr);
document.writeln(sum);

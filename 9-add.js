function add(a, b) {
  return a + b;
}

const firstNum = Number.parseInt(process.argv[2]);
const secondNum = Number.parseInt(process.argv[3]);

console.log(add(firstNum, secondNum));

const firstArg = process.argv[2];
const parsed = Number.parseInt(firstArg);

if (firstArg === undefined || Number.isNaN(parsed)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${parsed}`);
}

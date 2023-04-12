const parseArgs = () => {
  const args = process.argv.slice();
  console.log(process.argv.slice(2));

  const argValues = {};

  for (let i = 0; i < args.length; i += 2) {
    argValues[args[i].slice(2)] = args[i + 1];
  }

  const argStrings = Object.keys(argValues).map(
    (key) => `${key} is ${argValues[key]}`
  );

  console.log(argStrings.join(", "));
};

parseArgs();

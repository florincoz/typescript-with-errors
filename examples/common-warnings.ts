console.log(1 == '1' ? true : false);

const methodThatAcceptsString = (str: string) => {
  console.log(str);
};

let stringOrUndefined!: string | undefined;
methodThatAcceptsString(stringOrUndefined);

methodThatAcceptsString(null)


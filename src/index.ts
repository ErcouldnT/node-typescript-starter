export const add = (a: number, b: number) => {
  // Typescript will guess the function returns a number
  return a + b;
};

const number1 = 5;
const number2 = 10;
const result = add(number1, number2); // Result will be a number

console.log("The result is %d", result);

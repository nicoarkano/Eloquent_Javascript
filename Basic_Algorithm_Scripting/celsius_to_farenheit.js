function convertToF(celsius) {
  let fahrenheit = celsius*9/5 +32;
  return fahrenheit;
}

let farenheit = convertToF(30);

export default convertToF();

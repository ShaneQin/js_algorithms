// 10进制转2进制
function decimalToBinary(decNumber) {
  const remStack = [];
  let number = decNumber;
  let rem;
  let binaryString = '';
  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    console.log(rem, number);
    number = Math.floor(number / 2);
  }
  while (remStack.length) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

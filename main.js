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

// 其他进制转10进制
function baseConverter(decNumber, base) {
    const remStack = [];
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber;
    let rem;
    let baseString = '';
    if (!(base >= 2 && base <= 36)) {
      return '';
    }
    while (number > 0) {
      rem = Math.floor(number % base);
      remStack.push(rem);
      number = Math.floor(number / base);
    }
    while (remStack.length) {
      baseString += digits[remStack.pop()];
    }
    return baseString;
  }

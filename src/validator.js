export default function isValidCardNumber(number) {
    const digits = number.replace(/\D/g, '').split('').reverse().map(Number);
    const sum = digits.reduce((acc, digit, idx) => {
      if (idx % 2) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      return acc + digit;
    }, 0);
    return sum % 10 === 0;
  }
  
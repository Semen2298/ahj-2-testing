import isValidCardNumber from "../validator";

test('Valid card numbers', () => {
  expect(isValidCardNumber('4539578763621486')).toBe(true); // Visa
  expect(isValidCardNumber('5500005555555559')).toBe(true); // Mastercard
});

test('Invalid card numbers', () => {
  expect(isValidCardNumber('1234567890123456')).toBe(false);
});

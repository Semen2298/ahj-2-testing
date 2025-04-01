import getCardType from '../card-type';

test('Visa detected', () => {
  expect(getCardType('4')).toBe('visa');
});

test('Mastercard detected', () => {
  expect(getCardType('51')).toBe('mastercard');
});

test('Amex detected', () => {
  expect(getCardType('34')).toBe('amex');
});

test('Mir detected', () => {
  expect(getCardType('2200')).toBe('mir');
});

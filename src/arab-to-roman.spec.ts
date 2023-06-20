import { convertArabToRoman } from './arab-to-roman';

const testCases = [
  { arab: 1, roman: 'I' },
  { arab: 2, roman: 'II' },
];

describe('Arab to roman converter', () => {
  test('should convert 1 to I', () => {
    expect(convertArabToRoman(1)).toBe('I');
  });
  test.each(testCases)('should convert $arab to $roman', ({ arab, roman }) => {
    expect(convertArabToRoman(arab)).toBe(roman);
  });
});

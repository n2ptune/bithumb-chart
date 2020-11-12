import formatNumberComma from './number-comma'

test('Basic behavior', () => {
  expect(formatNumberComma('10')).toBe('10')
  expect(formatNumberComma('100')).toBe('100')
  expect(formatNumberComma('1000')).toBe('1,000')
  expect(formatNumberComma('10000')).toBe('10,000')
  expect(formatNumberComma('100000')).toBe('100,000')
  expect(formatNumberComma('1000000')).toBe('1,000,000')
  expect(formatNumberComma('10000000')).toBe('10,000,000')
  expect(formatNumberComma('20000000')).toBe('20,000,000')
  expect(formatNumberComma('100000000')).toBe('100,000,000')
  expect(formatNumberComma('1000000000')).toBe('1,000,000,000')
})

test('Complicated number', () => {
  expect(formatNumberComma(235469875215)).toBe('235,469,875,215')
  expect(formatNumberComma(18524762358)).toBe('18,524,762,358')
})

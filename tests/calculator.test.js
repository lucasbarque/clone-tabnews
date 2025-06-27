const calculator = require('../models/calculator')

test("sum 2 + 2 should be return 4", () => {
  const result = calculator.sum(2, 2);
  expect(result).toBe(4)
})

test("sum 5 + 100 should be return 105", () => {
  const result = calculator.sum(5, 100);
  expect(result).toBe(105)
})

test("sum 'banana' + 100 should be return 'Error'", () => {
  const result = calculator.sum('banana', 100);
  expect(result).toBe('Error')
})

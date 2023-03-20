// Test a function that reverse a string
import { reverseString } from './solucao.js'

describe('reverseString', () => {
  it('should reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh')
    expect(reverseString('world')).toBe('dlrow')
    expect(reverseString('')).toBe('')
  })
})

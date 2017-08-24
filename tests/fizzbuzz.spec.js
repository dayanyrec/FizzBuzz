import { expect } from 'chai';
import fizzbuzz from '../src/fizzbuzz';

describe('FizzBuzz', () => {
  it('should speak `Fizz` if input number is divisible by 3', () => {
    expect(fizzbuzz(3)).to.be.equal('Fizz');
  });
});

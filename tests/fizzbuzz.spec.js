import { expect } from 'chai';
import fizzbuzz from '../src/fizzbuzz';

describe('FizzBuzz', () => {
  it('should speak `Fizz` if input number is divisible by 3', () => {
    expect(fizzbuzz(3)).to.be.equal('Fizz');
    expect(fizzbuzz(6)).to.be.equal('Fizz');
  });

  it('should speak `Buzz` if input number is divisible by 5', () => {
    expect(fizzbuzz(5)).to.be.equal('Buzz');
    expect(fizzbuzz(10)).to.be.equal('Buzz');
  });

  it('should speak `FizzBuzz` if input number is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).to.be.equal('FizzBuzz');
  });
});

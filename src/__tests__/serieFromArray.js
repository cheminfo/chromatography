import { serieFromArray } from '../serieFromArray';

test('Errors', () => {
  expect(() => serieFromArray(1)).toThrow('Serie.fromArray requires as parameter an array of numbers or array');
  expect(() => serieFromArray(['a'])).toThrow('Serie.fromArray requires as parameter an array of numbers or array');
});

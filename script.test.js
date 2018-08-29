const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'reesespuff.com',
  'disney.com',
  'bossbaby.com'
];

it('is Testing... Testing... 1.. 2.. 3..', () => {
  expect('hello').toBe('hello');
})

it('is testing googleSearch', () => {
  expect(googleSearch('placeholder text', dbMock)).toEqual([]);
  expect(googleSearch('dog', dbMock)).toEqual(['dog.com']);
})

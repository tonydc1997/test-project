const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'reesespuff.com',
  'disney.com',
  'bossbaby.com'
];

it('Testing... Testing... 1.. 2.. 3..', () => {
  googleSearch('dummy-place-holder', dbMock);
})

const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people', () => {
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
  })
})

it('calls swapi to get people, via a promise', () => {
  swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87);
  })
})

const fetch = require('node-fetch');
const swapi = require('./script2');

/*  When testing asynchronous functions, be sure to include: 
      ~ expect.assertions(x)
        – This ensures that the test is actually working and not just passing it because it's a generic test.

      ~ Either pass done() to the test (like in the 1st test) or 
        return the fetch call (like in the 2nd test)
        – This addresses the pending nature of async, which tells the test to wait until the pending process is complete.
*/

it('calls swapi to get people', (done) => {
  expect.assertions(1);
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
    done();
  })
})

it('calls swapi to get people, via a promise', () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  })
})

it('getPeople returns count and results', () => {
  const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
      count: 87,
      results: [0,1,2,3,4,5]
    })
  }))
  expect.assertions(2);
  return swapi.getPeoplePromise(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
  });
})



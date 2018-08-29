const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animalplanet.com',
  'catpictures.com',
  'myfavouritecats.com'
];

const googleSearch = (searchInput) => {
  const matches = googleDatabase.filter(website => {
    return website.includes(searchInput);
  })
  return matches.length > 3 ? matches.slice(0, 3) : matches;
}

console.log(googleSearch('soup'));

module.exports = googleSearch;

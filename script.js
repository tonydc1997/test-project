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
}

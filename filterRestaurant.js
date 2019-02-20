const { get,uniqWith,isEqual } = require('lodash');
const { writeFile } = require('fs-promise')
const restaurants = require('./restaurants.json');

const restaurantsCleaned = restaurants
  .map(restaurant => ({
    id: restaurant.id,
    name: restaurant.name,
    address: restaurant.address1,

    city: restaurant.city,
    mainCategory: get(restaurant, 'categorisation.primary.name'),
    editorial_rating: restaurant.editorial_rating,
    description: get(restaurant, 'description', ''),
    to_website: get(restaurant, 'to_website', ''),
    image_url: restaurant.image_url,
    latitude: restaurant.latitude,
    longitude: restaurant.longitude,
    id_area: get(restaurant,'area.name','',),
  }))
  .filter(restaurant => (
    restaurant.id &&
    restaurant.name &&
    restaurant.address &&
    restaurant.city &&
    restaurant.mainCategory &&
    restaurant.editorial_rating &&
    restaurant.description &&
    restaurant.image_url &&
    restaurant.latitude &&
    restaurant.longitude&&
    restaurant.id_area
  ))
  .sort((a, b) => b.editorial_rating - a.editorial_rating)
// console.log(restaurantsCleaned)

Array.prototype.unique = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

const areasCleaned = restaurants
  .map(restaurant => ({
    area: get(restaurant, 'area.name'),
  })).filter(restaurant => (
    restaurant.area
  ));
  console.log(areasCleaned)

// const areasfilter = [];
// for (let i = 0; i < areasCleaned.length; i++)
//     for (let j = 0; j < areasfilter.length; j++)
//     if (areasfilter[j] != areasCleaned[i].area) {
//       areasfilter.push(areasCleaned[i])
//   } else {
//     console.log('tutu')
//   }
// console.log(areasfilter)
const areaUnique = uniqWith(areasCleaned, isEqual)


// console.log('Number of unique IDs', restaurantsCleaned.map(restaurant => restaurant.id).unique().length)
// console.log('Number of restaurants', restaurantsCleaned.length)
// console.log(areasCleaned)
writeFile('restaurants-cleaned.json', JSON.stringify(restaurantsCleaned, null, '\t'))
  .then(() => console.log('Wrote to file successfully'))

writeFile('areas-cleaned.json', JSON.stringify(areaUnique, null, '\t'))
  .then(() => console.log('Wrote to file successfully'))


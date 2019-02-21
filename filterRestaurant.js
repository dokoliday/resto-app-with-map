//recuperation des fonctionnalitees lodash utilisees
//get permet de rentrer en profondeur dans un objet
//uniqwith assambler a isequal permet d'enlever les doublons dans un tableau d'objet 
const { get, uniqWith, isEqual } = require('lodash');

//write file permet d'editer un fichier, ici un json
const { writeFile } = require('fs-promise')

//import du fichier ./restaurant .json
const restaurants = require('./restaurants.json');

//recuperation des donnees utiles dans json
const restaurantJsonFiltrer = restaurants
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
    id_area: get(restaurant, 'area.name', ''),
  }))
  // filtrer pour les existant (non undefined)
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
    restaurant.longitude &&
    restaurant.id_area
  ))
  //trier du plus grand au plus petit ranking
  .sort((a, b) => b.editorial_rating - a.editorial_rating)


//fonction d'arnaud pour verifie existance index
// Array.prototype.unique = function () {
//   return this.filter(function (value, index, self) {
//     return self.indexOf(value) === index;
//   });
// }
// console.log('Number of unique IDs', restaurantJsonFiltrer.map(restaurant => restaurant.id).unique().length)
// console.log('Number of restaurants', restaurantJsonFiltrer.length)


// creation d'un ojbet avec chaque area de chaque restaurant
const creationObjetArea = restaurants
  .map(restaurant => ({
    area: get(restaurant, 'area.name'),
  })).filter(restaurant => (
    restaurant.area
  ));

//suppression des doublons avec lodash puis ajout d'un index unique par area
const areaFiltreDoublon = uniqWith(creationObjetArea, isEqual)
const aeraComplet = areaFiltreDoublon.map((e, index) => ({
  id: index+1, name: e.area
}
))

//creation d'un nouveau tableau en reprenant chaque objet restaurant et en ajoutant un cle etrangere
//correspondante a l id de son area 
const restaurantComplet = [];
restaurantJsonFiltrer
  .map(e => {
    aeraComplet.map(a => {
      if (e.id_area === a.name) {
        restaurantComplet.push({ ...e, id_area: a.id })
      }
    })
  })
// console.log(restaurantComplet)

//creation de deux json restaurant et area
writeFile('restaurants-cleaned.json', JSON.stringify(restaurantComplet, null, '\t'))
  .then(() => console.log('Wrote to file successfully'))

writeFile('areas-cleaned.json', JSON.stringify(aeraComplet, null, '\t'))
  .then(() => console.log('Wrote to file successfully'))


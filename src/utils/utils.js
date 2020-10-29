const getRandomItemOfArray = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomNumber = (maxNumber) => Math.ceil(Math.random() * maxNumber);
const extend = (a, b) => Object.assign({}, a, b);
const getUniqueCitiesOfOffers = (offersArray) => {
  let cities = [];
  offersArray.map((offer) => cities.push(offer.city.name));
  return [...new Set(cities)];
};


export {
  getRandomItemOfArray,
  getRandomNumber,
  extend,
  getUniqueCitiesOfOffers
};

const getRandomBoolean = () => Boolean(Math.round(Math.random()));
const getRandomItemOfArray = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomNumber = (maxNumber) => Math.ceil(Math.random() * maxNumber);
const getRandomArray = (array) => array.filter(() => getRandomBoolean());
const extend = (a, b) => Object.assign({}, a, b);
const getUniqueCitiesOfOffers = (offersArray) => {
  let cities = [];
  offersArray.map((offer) => cities.push(offer.city));
  return [...new Set(cities)];
};


export {
  getRandomBoolean,
  getRandomItemOfArray,
  getRandomNumber,
  getRandomArray,
  extend,
  getUniqueCitiesOfOffers
};

const getRandomBoolean = () => Boolean(Math.round(Math.random()));
const getRandomItemOfArray = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomNumber = (maxNumber) => Math.ceil(Math.random() * maxNumber);
const getRandomArray = (array) => array.filter(() => getRandomBoolean());
const extend = (a, b) => Object.assign({}, a, b);


const sortOffer = (offers, sortType) => {
  switch (sortType) {
    case (`low`):
      return offers.slice().sort((a, b) => a.price - b.price);
    case (`high`):
      return offers.slice().sort((a, b) => b.price - a.price);
    case (`rated`):
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};


const getFilteredOffers = (offersArray, currentCity) =>
  offersArray.filter((offer) => offer.city === currentCity);


export {
  getRandomBoolean,
  getRandomItemOfArray,
  getRandomNumber,
  getRandomArray,
  extend,
  sortOffer,
  getFilteredOffers,
};

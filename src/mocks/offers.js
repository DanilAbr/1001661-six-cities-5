import {
  AVATAR_URL,
  DESCRIPTION,
  IMAGES_COUNT,
  INSIDE_ITEMS,
  MAX_ADULTS_COUNT,
  MAX_BEDROOMS_COUNT,
  MAX_PRICE,
  MAX_RATING,
  NAMES,
  OFFERS_COUNT,
  TITLES,
  TYPES,
} from './utils/const';
import {getRandomArray, getRandomBoolean, getRandomItemOfArray, getRandomNumber} from './utils/utils';


const getRandomSrc = () => `http://picsum.photos/260/200?r=${Math.random()}`;
const getRandomPrice = () => getRandomNumber(MAX_PRICE);
const getRandomType = () => getRandomItemOfArray(TYPES);
const getRandomTitle = () => getRandomItemOfArray(TITLES);
const getImages = () => getRandomArray(new Array(IMAGES_COUNT).fill(``).map(getRandomSrc));


function generateOffer() {
  return {
    images: getImages(), // Array // string
    title: getRandomTitle(), // string
    description: DESCRIPTION, // string
    isPremium: getRandomBoolean(), // boolean
    type: getRandomType(), // string
    rating: getRandomNumber(MAX_RATING), // string
    bedroomsCount: getRandomNumber(MAX_BEDROOMS_COUNT), // string
    maxAdults: getRandomNumber(MAX_ADULTS_COUNT), // string
    insideItems: getRandomArray(INSIDE_ITEMS), // Array // string
    price: getRandomPrice(), // string
    owner: { // Object
      avatar: `${AVATAR_URL}/${Math.random()}`, // string
      name: getRandomItemOfArray(NAMES), // string
      isSuper: getRandomBoolean(), // boolean
    }
  };
}

const offers = new Array(OFFERS_COUNT).fill(``).map(generateOffer);


export default offers;

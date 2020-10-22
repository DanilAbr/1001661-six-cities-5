import {nanoid} from 'nanoid';
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
  CITIES,
} from '../utils/const';
import {getRandomArray, getRandomBoolean, getRandomItemOfArray, getRandomNumber} from '../utils/utils';


const getRandomSrc = () => `http://picsum.photos/260/200?r=${Math.random()}`;
const getRandomPrice = () => getRandomNumber(MAX_PRICE);
const getRandomType = () => getRandomItemOfArray(TYPES);
const getRandomTitle = () => getRandomItemOfArray(TITLES);
const getImages = () => getRandomArray(Array.from({length: IMAGES_COUNT}, getRandomSrc));


function generateOffer() {
  return {
    city: getRandomItemOfArray(CITIES),
    images: getImages(),
    title: getRandomTitle(),
    description: DESCRIPTION,
    isPremium: getRandomBoolean(),
    type: getRandomType(),
    rating: getRandomNumber(MAX_RATING),
    bedroomsCount: getRandomNumber(MAX_BEDROOMS_COUNT),
    maxAdults: getRandomNumber(MAX_ADULTS_COUNT),
    insideItems: getRandomArray(INSIDE_ITEMS),
    price: getRandomPrice(),
    coords: [52.35 + Math.random() * 0.05, 4.88 + Math.random() * 0.05],
    owner: {
      avatar: `${AVATAR_URL}/${Math.ceil(Math.random() * 3)}`,
      name: getRandomItemOfArray(NAMES),
      isSuper: getRandomBoolean(),
    },
    id: nanoid(),
  };
}


export default Array.from({length: OFFERS_COUNT}, generateOffer);

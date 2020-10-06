import {NAMES, AVATAR_URL, MAX_RATING, REVIEWS_TEXT, REVIEWS_COUNT} from './utils/const';
import {getRandomItemOfArray, getRandomNumber} from './utils/utils';


function generateReview() {
  return {
    avatar: `${AVATAR_URL}/${Math.random()}`, // string
    name: getRandomItemOfArray(NAMES), // string
    rating: getRandomNumber(MAX_RATING), // string
    date: new Date(),
    text: REVIEWS_TEXT,
  };
}

const reviews = new Array(REVIEWS_COUNT).fill(``).map(generateReview);


export default reviews;

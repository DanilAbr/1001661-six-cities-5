import {AVATAR_URL, MAX_RATING, NAMES, REVIEWS_COUNT, REVIEWS_TEXT} from '../utils/const';
import {getRandomItemOfArray, getRandomNumber} from '../utils/utils';
import {nanoid} from 'nanoid';


function generateReview() {
  return {
    avatar: `${AVATAR_URL}/${Math.random()}`, // string
    name: getRandomItemOfArray(NAMES), // string
    rating: getRandomNumber(MAX_RATING), // string
    date: new Date(),
    text: REVIEWS_TEXT,
    id: nanoid(),
  };
}

const reviews =
  new Array(REVIEWS_COUNT)
    .fill(``)
    .map(generateReview);


export default reviews;

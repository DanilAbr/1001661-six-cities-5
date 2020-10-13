import {AVATAR_URL, MAX_RATING, NAMES, REVIEWS_COUNT, REVIEWS_TEXT} from '../utils/const';
import {getRandomItemOfArray, getRandomNumber} from '../utils/utils';
import {nanoid} from 'nanoid';


function generateReview() {
  return {
    avatar: `${AVATAR_URL}/${Math.random()}`,
    name: getRandomItemOfArray(NAMES),
    rating: getRandomNumber(MAX_RATING),
    date: new Date(),
    text: REVIEWS_TEXT,
    id: nanoid(),
  };
}


export default Array.from({length: REVIEWS_COUNT}, generateReview);

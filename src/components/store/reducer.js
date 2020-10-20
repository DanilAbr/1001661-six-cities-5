import {CITIES} from '../../utils/const';
import offers from '../../mocks/offers';


const initialState = {
  city: CITIES[0],
  offers,
};

const reducer = (state = initialState, action) => {
  return state;
};


export {reducer};

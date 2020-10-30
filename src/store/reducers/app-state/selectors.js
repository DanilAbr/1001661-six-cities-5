import {createSelector} from 'reselect';
import {NameSpace} from '../root-reducer';
import {SortTypeEnum} from '../../../utils/const';
import {getOffers} from '../data/selectors';


const NAME_SPACE = NameSpace.STATE;

const getSortType = (state) => state[NAME_SPACE].sortType;
const getCitiesList = (state) => state[NAME_SPACE].citiesList;
const getCurrentCity = (state) => state[NAME_SPACE].currentCity;
const getActiveId = (state) => state[NAME_SPACE].activeOfferId;


const getCurrentOffers = createSelector(
    getOffers,
    getCurrentCity,
    getSortType,
    (offers, city, sortType) => {
      const filteredOffers =
        offers.filter((offer) => offer.city.name === city);

      return SortTypeEnum[sortType](filteredOffers);
    }
);

const getActiveCard = createSelector(
    getCurrentOffers,
    getActiveId,
    (offers, id) => {
      return offers.find((offer) => offer.id === id);
    }
);


export {
  getSortType,
  getCitiesList,
  getCurrentCity,
  getCurrentOffers,
  getOffers,
  getActiveCard
};

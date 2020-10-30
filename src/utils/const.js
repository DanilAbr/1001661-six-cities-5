const AVATAR_URL = `https://api.adorable.io/avatars/128`;
const NAMES = [`Alexandra`, `Ivan`, `Danila`, `Anna`, `Igor`];
const REVIEWS_TEXT = `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`;
const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const MAX_RATING = 5;
const REVIEWS_COUNT = 10;

const offerClasses = {
  isFavorites: {
    listWrap: `favorites__places places__list`,
    article: `favorites__card place-card`,
    imageWrap: `favorites__image-wrapper place-card__image-wrapper`,
    infoWrap: `favorites-card__info place-card__info`,
    button: `place-card__bookmark-button--active button`,
  },
  isDetail: {
    listWrap: `near-places__list places__list`,
    article: `near-places__card place-card`,
    imageWrap: `near-places__image-wrapper place-card__image-wrapper`,
    infoWrap: `place-card__info`,
    button: `place-card__bookmark-button button`,
  },
  isMain: {
    listWrap: `cities__places-list tabs__content places__list`,
    article: `cities__place-card place-card`,
    imageWrap: `cities__image-wrapper place-card__image-wrapper`,
    infoWrap: `place-card__info`,
    button: `place-card__bookmark-button button`,
  },
};

const OfferTypes = {
  FAVOURITE: `isFavorites`,
  DETAIL: `isDetail`,
  MAIN: `isMain`,
};

const SortLabel = {
  popular: `Popular`,
  low: `Price: low to high`,
  high: `Price: high to low`,
  rated: `Top rated first`
};

const SortTypeEnum = {
  low: (offers) => offers.sort((a, b) => a.price - b.price),
  high: (offers) => offers.sort((a, b) => b.price - a.price),
  rated: (offers) => offers.sort((a, b) => b.rating - a.rating),
  popular: (offers) => offers,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};


export {
  AVATAR_URL,
  NAMES,
  MAX_RATING,
  REVIEWS_TEXT,
  REVIEWS_COUNT,
  CITIES,
  offerClasses,
  OfferTypes,
  SortLabel,
  SortTypeEnum,
  AuthorizationStatus,
};

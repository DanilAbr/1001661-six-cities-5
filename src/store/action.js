const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFER_LIST: `GET_OFFER_LIST`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    city,
  }),
};


export {ActionType, ActionCreator};

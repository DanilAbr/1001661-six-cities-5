const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFER_LIST: `GET_OFFER_LIST`,
};

const ActionCreator = {
  getOfferList: () => ({
    type: ActionType.GET_OFFER_LIST,
  }),
};


export {ActionType, ActionCreator};

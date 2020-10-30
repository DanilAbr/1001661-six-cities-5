import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './store/reducers/root-reducer';
import App from './components/app/app';
import reviews from './mocks/reviews';
import {checkAuth, fetchOffersList} from './store/api-actions';


const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchOffersList()),
  store.dispatch(checkAuth()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          reviews={reviews}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});

import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import { rootReducer } from './redux/rootReducer';
import App from './App';

// const store = createStore(rootReducer, compose(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(rootReducer, composeEnhancers());

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

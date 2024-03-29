import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers"
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

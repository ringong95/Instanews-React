import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeFactory from './js/redux/createStore';


import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
    weeks: [],
    posts: [],
    postFilter: 'React',
  };
  
const store = storeFactory(initialState);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();

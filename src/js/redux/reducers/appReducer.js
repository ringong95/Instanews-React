import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import newsReducer from './newsReducer';

export default combineReducers({
  category: categoryReducer,
  news: newsReducer
});
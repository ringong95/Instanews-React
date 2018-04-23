import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import haveArticlesReducer from './haveArticlesReducer';
import loadingReducer from './loadingReducer'
import newsReducer from './newsReducer';

export default combineReducers({
  haveArticles: haveArticlesReducer,
  loadinng: loadingReducer,
  category: categoryReducer,
  news: newsReducer
});
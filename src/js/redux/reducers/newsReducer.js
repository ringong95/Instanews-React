import { LOADNEWS } from '../actions/fetchActions';

const newsIntialState = [];
export default (state = newsIntialState, action) => {
  switch (action.type) {
    case LOADNEWS:
     const news = action.payload.splice(12);
    return news;
    default:
      return state;
  }
};
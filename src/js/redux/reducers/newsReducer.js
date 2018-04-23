import { LOADNEWS, CLEARARTICLES } from '../actions/fetchActions';

const newsIntialState = [];
export default (state = newsIntialState, action) => {
  switch (action.type) {
    case LOADNEWS:
    return action.payload.filter((value, key )=>{
      return (value.multimedia).length >=5;
    }).slice(0, 12);
    case CLEARARTICLES:
    return [];
    default:
      return state;
  }
};
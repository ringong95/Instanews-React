import {  GOTARTICLES, CLEARARTICLES } from "../actions/fetchActions";


export default (state = false, action) => {
    switch (action.type) {
      case GOTARTICLES:
      return true
      case CLEARARTICLES:
      return false;
      default:
        return state;
    }
  };
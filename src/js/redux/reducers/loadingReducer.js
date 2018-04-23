import { TOGGLELOADING } from "../actions/fetchActions";


export default (state = false, action) => {
    switch (action.type) {
    case TOGGLELOADING:
    return !state
      default:
        return state;
    }
  };
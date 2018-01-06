import { FETCH_PROPERTIES } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PROPERTIES:
      return action.payload.data.result;
    default:
      return state;
  }
};

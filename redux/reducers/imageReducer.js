import Constants from '../constants/constants';

const initialState = '';

export function imageReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.SET_CURRENT_IMAGE:
      return action.payload;

    default:
      return state;
  }
}

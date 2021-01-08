import Constants from '../constants/constants';

const initialState = true;

export function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.SET_LOADING_PROCESS:
      return action.payload;

    default:
      return state;
  }
}

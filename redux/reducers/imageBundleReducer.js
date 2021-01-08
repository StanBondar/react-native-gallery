import Constants from '../constants/constants';

const initialState = [];

export function imageBundleReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.SET_IMAGES_BUNDLE:
      return action.payload;

    default:
      return state;
  }
}

import {combineReducers} from 'redux';
import {loadingReducer} from './loadingReducer';
import {imageBundleReducer} from './imageBundleReducer';
import {imageReducer} from './imageReducer';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  allImages: imageBundleReducer,
  activeImage: imageReducer,
});

import Constants from '../constants/constants';

export function getImageBundle() {
  return (dispatch) => {
    dispatch({
      type: Constants.SET_LOADING_PROCESS,
      payload: true
    });
    fetch(
      'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: Constants.SET_IMAGES_BUNDLE,
          payload: data
        });
        dispatch({
          type: Constants.SET_LOADING_PROCESS,
          payload: false
        })
      });
  }
}

export function setCurrentImage(url) {
  return {
    type: Constants.SET_CURRENT_IMAGE,
    payload: url
  }
}
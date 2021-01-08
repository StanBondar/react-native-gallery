import React from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';
import { connect } from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  view: {
    width: windowWidth,
    height: windowHeight,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

const SingleImage = (props) => {
  const {url} = props;

  return (
    <View style={styles.view}>
      <Image source={{uri: url}} style={styles.image} />
    </View>
  );
};

const mapStateToProps = (store) => {
  return {
    url: store.activeImage
  }
}

export default connect(mapStateToProps)(SingleImage);

import React from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';

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

export default SingleImage;

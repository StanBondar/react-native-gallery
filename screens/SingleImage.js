import React, {useState} from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import Loader from '../components/Loader';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  view: {
    width: windowWidth,
    height: windowHeight,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

const SingleImage = (props) => {
  const {url} = props;

  const [isLoading, setLoading] = useState(false);

  return (
    <View style={styles.view}>
      <Image
        source={{uri: url}}
        style={styles.image}
        onLoadStart={() => console.log('Started')}
        onLoadEnd={() => setTimeout(() => console.log('Loaded'), 3000)}
      />
      {isLoading && <Loader />}
    </View>
  );
};

const mapStateToProps = (store) => {
  return {
    url: store.activeImage,
  };
};

export default connect(mapStateToProps)(SingleImage);

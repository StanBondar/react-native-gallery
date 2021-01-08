import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import {setCurrentImage} from '../redux/actions';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    marginBottom: 0,
    padding: 0,
  },
  imageInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'absolute',
    width: '100%',
    backgroundColor: '#000',
    padding: 10,
    bottom: 0,
    left: 0,
  },
  text: {
    color: '#fff',
    fontSize: 8,
  },
  touched: {
    color: '#999999',
    fontSize: 8,
  },
});

function ImageBlock(props) {
  const {
    url,
    fullImage,
    css,
    name,
    author,
    setCurrentImage,
    navigation,
  } = props;

  const [touched, setTouched] = React.useState(false);

  const onPressHandler = () => {
    setCurrentImage(fullImage);
    setTouched(true);
    navigation.navigate('SingleImage');
  };

  return (
    <View style={css} onTouchEnd={onPressHandler}>
      <Image source={{uri: url}} style={styles.image} />
      <View style={styles.imageInfo}>
        <Text style={touched ? styles.touched : styles.text}>{name}</Text>
        <Text style={styles.text}>{author}</Text>
      </View>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentImage: (url) => dispatch(setCurrentImage(url)),
  };
};

export default connect(null, mapDispatchToProps)(ImageBlock);

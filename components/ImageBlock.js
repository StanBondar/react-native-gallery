import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  tinyLogo: {
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

export default function ImageBlock(props) {
  const {url, css, name, author} = props;

  const [touched, setTouched] = React.useState(false);

  return (
    <View style={css} onTouchEnd={() => setTouched(true)}>
      <Image source={{uri: url}} style={styles.tinyLogo} />
      <View style={styles.imageInfo}>
        <Text style={touched ? styles.touched : styles.text}>{name}</Text>
        <Text style={styles.text}>{author}</Text>
      </View>
    </View>
  );
}

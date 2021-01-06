import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
import ImageBlock from '../components/ImageBlock';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  block: {
    width: windowWidth / 3,
    height: 179,
    marginBottom: 0,
    padding: 0,
    position: 'relative',
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gallery: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

const Gallery = () => {
  const [isLoading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
    )
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      });
  }, []);

  const photosArr =
    photos.length > 0
      ? photos.map((el, id) => {
          return (
            <ImageBlock
              css={styles.block}
              url={el.urls.small}
              name={el.user.name}
              author={el.alt_description}
              key={id}
            />
          );
        })
      : [];

  const spinner = (
    <View style={styles.spinner}>
      <ActivityIndicator />
    </View>
  );

  return isLoading ? (
    spinner
  ) : (
    <View
      style={styles.gallery}>
      <>{photosArr}</>
    </View>
  );
};

export default Gallery;

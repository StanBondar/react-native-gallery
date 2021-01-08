import React, {useState, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import ImageBlock from '../components/ImageBlock';
import {getImageBundle} from '../redux/actions';

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
    display: 'flex',
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

const Gallery = (props) => {
  const {photos, isLoading, getImages, navigation} = props;

  useEffect(() => {
    getImages();
  }, []);

  const photosArr =
    photos.length > 0 ? (
      photos.map((el, id) => {
        return (
          <ImageBlock
            css={styles.block}
            url={el.urls.small}
            fullImage={el.urls.full}
            name={el.user.name}
            author={el.alt_description}
            key={id}
            navigation={navigation}
          />
        );
      })
    ) : (
      <Text>There are no photos...</Text>
    );

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

const mapStateToProps = (store) => {
  return {
    photos: store.allImages,
    isLoading: store.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getImages: () => dispatch(getImageBundle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

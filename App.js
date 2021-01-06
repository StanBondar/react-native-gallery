import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
import ImageBlock from './components/ImageBlock';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Gallery from './screens/Gallery';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  tinyLogo: {
    width: windowWidth / 3,
    height: 179,
    marginBottom: 0,
    padding: 0,
    position: 'relative',
  },
});

const YourApp = () => {
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
              css={styles.tinyLogo}
              url={el.urls.small}
              name={el.user.name}
              author={el.alt_description}
              key={id}
            />
          );
        })
      : [];

  const spinner = (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator />
    </View>
  );

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;

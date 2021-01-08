import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Gallery from './screens/Gallery';
import SingleImage from './screens/SingleImage';
import {Provider} from 'react-redux';
import store from './redux/configureStore';

const YourApp = () => {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="SingleImage" component={SingleImage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default YourApp;

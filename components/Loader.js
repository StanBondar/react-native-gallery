import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      opacity: 0.7,
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      justifyContent: 'center',
    alignItems: 'center'
  }
});

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default Loader;

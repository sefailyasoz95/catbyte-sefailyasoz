import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH} from '../../Constants/deviceDimensions';

type Props = {};

const Loading = (props: Props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={'white'} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    width: WIDTH,
    position: 'absolute',
    zIndex: 99999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

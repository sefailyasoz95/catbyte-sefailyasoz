import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
};

const LeftArrow = ({onPress}: Props) => {
  return <TouchableOpacity onPress={onPress} style={styles.goBack} />;
};

export default LeftArrow;

const styles = StyleSheet.create({
  goBack: {
    width: 10,
    height: 10,
    position: 'absolute',
    left: 20,
    top: 20,
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    transform: [{rotate: '45deg'}, {scale: 1.5}],
  },
});

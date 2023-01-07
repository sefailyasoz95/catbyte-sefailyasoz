import {
  AccessibilityInfo,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {HEIGHT, WIDTH} from '../../Constants/deviceDimensions';

type Props = {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const Button = ({text, onPress, style}: Props) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <LinearGradient
        style={styles.button}
        colors={['#333', '#777']}
        end={{
          x: 1,
          y: 0,
        }}
        start={{
          x: 1,
          y: 1,
        }}>
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
  },
  button: {
    width: WIDTH * 0.85,
    alignSelf: 'center',
    zIndex: 999,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '700',
    letterSpacing: 1.2,
    fontSize: 20,
    color: 'white',
  },
});

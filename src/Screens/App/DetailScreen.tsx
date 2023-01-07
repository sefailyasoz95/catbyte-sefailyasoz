import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParams} from '../../Constants/AppStackParams';
import {RouteProp} from '@react-navigation/native';
import {HEIGHT, WIDTH} from '../../Constants/deviceDimensions';
import LinearGradient from 'react-native-linear-gradient';
import LeftArrow from '../../Components/LeftArrow/LeftArrow';
import {PLACEHOLDER_IMAGE} from '../../Constants/dummy';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParams, 'DetailScreen'>;
  route: RouteProp<AppStackParams, 'DetailScreen'>;
};
// image, firstName, lastName,
// age and company details (address, postal code, state).
const DetailScreen = ({route, navigation}: Props) => {
  const {user} = route.params;
  return (
    <LinearGradient
      style={styles.container}
      colors={['#fff', '#aaa']}
      end={{
        x: 1,
        y: 0,
      }}
      start={{
        x: 1,
        y: 1,
      }}>
      <LeftArrow onPress={navigation.goBack} />
      <Image
        source={{uri: user.image ? user.image : PLACEHOLDER_IMAGE}}
        style={styles.img}
        resizeMode="contain"
      />
      <Text style={styles.name}>
        {user.firstName} {user.lastName} {`(${user.age})`}
      </Text>
      <View style={styles.companyDetails}>
        <Text style={styles.title}>Company Details</Text>
        <Text style={styles.left}>
          Address:{' '}
          <Text style={styles.right}>{user.company.address.address}</Text>
        </Text>
        <Text style={styles.left}>
          Postal Code:{' '}
          <Text style={styles.right}>{user.company.address.postalCode}</Text>
        </Text>
        <Text style={styles.left}>
          State: <Text style={styles.right}>{user.company.address.state}</Text>
        </Text>
      </View>
    </LinearGradient>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  img: {
    width: WIDTH * 0.75,
    aspectRatio: 1,
    marginBottom: 20,
  },
  name: {
    fontWeight: '700',
    letterSpacing: 1.2,
    fontSize: 25,
  },
  companyDetails: {
    marginTop: 10,
    justifyContent: 'space-between',
    height: HEIGHT * 0.15,
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: '#ff4444',
    letterSpacing: 1.2,
  },
  left: {
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: 1.2,
  },
  right: {
    color: '#333',
  },
});

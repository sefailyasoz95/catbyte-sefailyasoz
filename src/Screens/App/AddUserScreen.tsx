import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParams} from '../../Constants/AppStackParams';
import {RouteProp} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import LeftArrow from '../../Components/LeftArrow/LeftArrow';
import {IUser} from '../../Constants/types';
import {WIDTH} from '../../Constants/deviceDimensions';
import Button from '../../Components/Button/Button';
import {useAppDispatch, useAppSelector} from '../../Redux/Store/store';
import {addUser} from '../../Redux/Reducer/reducers';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParams, 'AddUserScreen'>;
  route: RouteProp<AppStackParams, 'AddUserScreen'>;
};
const AddUserScreen = ({navigation, route}: Props) => {
  const {message, success, users} = useAppSelector(state => state.global);
  const [formValues, setFormValues] = useState<IUser>({
    id: users.length + 1,
    firstName: '',
    lastName: '',
    age: 0,
    company: {
      address: {
        address: '',

        postalCode: '',
        state: '',
      },
    },
  });
  const dispatch = useAppDispatch();

  const handleCreateUser = () => {
    if (
      !formValues.firstName ||
      !formValues.lastName ||
      !formValues.age ||
      !formValues.company.address.address ||
      !formValues.company.address.address ||
      !formValues.company.address.postalCode ||
      !formValues.company.address.state
    ) {
      Alert.alert('Please fill all fields');
    } else {
      dispatch(addUser(formValues));
    }
  };
  useEffect(() => {
    if (success && message) {
      Alert.alert(message, undefined, [
        {
          onPress: navigation.goBack,
        },
      ]);
    }
  }, [success, message]);

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
      <View style={{marginTop: 50}}>
        <TextInput
          placeholder="First Name"
          nativeID="firstName"
          placeholderTextColor={'#555'}
          style={styles.input}
          onChangeText={value => {
            setFormValues({...formValues, firstName: value});
          }}
        />
        <TextInput
          placeholderTextColor={'#555'}
          placeholder="Last Name"
          style={styles.input}
          onChangeText={value => {
            setFormValues({...formValues, lastName: value});
          }}
        />
        <TextInput
          placeholder="Age"
          keyboardType="number-pad"
          placeholderTextColor={'#555'}
          style={styles.input}
          onChangeText={value => {
            setFormValues({...formValues, age: Number(value)});
          }}
        />
        <TextInput
          placeholder="Company Address"
          keyboardType="number-pad"
          placeholderTextColor={'#555'}
          style={styles.input}
          onChangeText={value => {
            setFormValues({
              ...formValues,
              company: {
                ...formValues.company,
                address: {...formValues.company.address, address: value},
              },
            });
          }}
        />
        <TextInput
          placeholder="Company Address"
          keyboardType="number-pad"
          placeholderTextColor={'#555'}
          style={styles.input}
          onChangeText={value => {
            setFormValues({
              ...formValues,
              company: {
                ...formValues.company,
                address: {...formValues.company.address, address: value},
              },
            });
          }}
        />
        <TextInput
          placeholder="Company Postal Code"
          keyboardType="number-pad"
          placeholderTextColor={'#555'}
          style={styles.input}
          onChangeText={value => {
            setFormValues({
              ...formValues,
              company: {
                ...formValues.company,
                address: {...formValues.company.address, postalCode: value},
              },
            });
          }}
        />
        <TextInput
          placeholder="Company State"
          keyboardType="number-pad"
          placeholderTextColor={'#555'}
          style={styles.input}
          onChangeText={value => {
            setFormValues({
              ...formValues,
              company: {
                ...formValues.company,
                address: {...formValues.company.address, state: value},
              },
            });
          }}
        />
      </View>
      <Button text="Save" onPress={handleCreateUser} style={styles.button} />
    </LinearGradient>
  );
};

export default AddUserScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  input: {
    width: WIDTH * 0.85,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    height: 35,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  button: {
    position: 'absolute',
    bottom: 20,
  },
});

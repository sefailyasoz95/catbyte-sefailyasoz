import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {IUser} from '../../Constants/types';
import {useAppDispatch, useAppSelector} from '../../Redux/Store/store';
import {getUsers} from '../../Redux/Actions/actions';
import Loading from '../../Components/Loading/Loading';
import UserCard from '../../Components/UserCard/UserCard';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useFocusEffect} from '@react-navigation/native';
import {AppStackParams} from '../../Constants/AppStackParams';
import Button from '../../Components/Button/Button';
import {clearGlobalStates, deleteUser} from '../../Redux/Reducer/reducers';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParams, 'HomeScreen'>;
  route: RouteProp<AppStackParams, 'HomeScreen'>;
};
const HomeScreen = ({navigation, route}: Props) => {
  const dispatch = useAppDispatch();
  const safeAreaInsets = useSafeAreaInsets();
  const {isLoading, users} = useAppSelector(state => state.global);
  useFocusEffect(() => {
    dispatch(clearGlobalStates());
  });
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const handlePress = (user: IUser) => {
    navigation.navigate('DetailScreen', {
      user,
    });
  };

  const handleDelete = (userId: number) => {
    Alert.alert('Are you sure that you want to delete ?', undefined, [
      {
        text: 'Cancel',
      },
      {
        text: 'Delete',
        onPress: () => dispatch(deleteUser(userId)),
        style: 'destructive',
      },
    ]);
  };
  return (
    <>
      {isLoading && <Loading />}
      <SafeAreaView>
        <FlatList
          style={{marginBottom: safeAreaInsets.bottom * 1.5}}
          data={users}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item, index}) => (
            <UserCard
              onPress={handlePress}
              onDeletePressed={handleDelete}
              user={item}
              key={index}
            />
          )}
        />
        <Button
          text="Add"
          onPress={() => navigation.navigate('AddUserScreen')}
          style={styles.button}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    position: 'absolute',
    bottom: 20,
  },
});

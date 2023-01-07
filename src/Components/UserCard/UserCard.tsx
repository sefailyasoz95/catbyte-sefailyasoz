import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {IUser} from '../../Constants/types';
import {HEIGHT, WIDTH} from '../../Constants/deviceDimensions';
import {PLACEHOLDER_IMAGE} from '../../Constants/dummy';

type Props = {
  user: IUser;
  onPress: (user: IUser) => void;
  onDeletePressed: (userId: number) => void;
};

const UserCard = ({user, onPress, onDeletePressed}: Props) => {
  const handleDeletePress = useCallback(() => {
    onDeletePressed(user.id);
  }, [user]);

  const handleUserPress = () => onPress(user);

  return (
    <TouchableOpacity style={styles.shadow} onPress={handleUserPress}>
      <Text onPress={handleDeletePress} style={styles.deleteIcon}>
        X
      </Text>
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
        <Image
          source={{
            uri: user.image ? user.image : PLACEHOLDER_IMAGE,
          }}
          style={styles.img}
          resizeMode="cover"
        />
        <Text style={styles.cardText}>
          {user.firstName} {user.lastName} {`(${user.age})`}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  img: {
    width: '80%',
    height: '80%',
  },
  container: {
    width: WIDTH * 0.45,
    height: HEIGHT * 0.25,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginVertical: 10,
    borderRadius: 16,
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  cardText: {
    fontWeight: '600',
    letterSpacing: 1.2,
    color: '#ff4444',
  },
  deleteIcon: {
    position: 'absolute',
    color: '#ff2222',
    right: 10,
    top: 15,
    zIndex: 9999,
    fontSize: 20,
  },
});

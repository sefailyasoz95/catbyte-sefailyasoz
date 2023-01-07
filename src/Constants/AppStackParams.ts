import {IUser} from './types';

export type AppStackParams = {
  HomeScreen: undefined;
  DetailScreen: {
    user: IUser;
  };
  AddUserScreen: undefined;
};

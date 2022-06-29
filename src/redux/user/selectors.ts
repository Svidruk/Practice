import { UserData } from '@interfaces/UserData';
import { RootState } from '@redux/store';

export const selectUser = (state: RootState): UserData | null => state.userReducer.currentUser.data;

import { getAuthToken } from '@helpers/auth';
import { UserData } from '@interfaces/UserData';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { getCurrentUser } from '@redux/user/actions';

export const useAuth = (): { currentUser: UserData | null } => {
  const dispatch = useDispatch();
  const currentUser = useSelector<RootState, UserData | null>((state) => state.userReducer.currentUser.data);

  useEffect(() => {
    const authToken = getAuthToken();

    if (!currentUser && authToken) {
      dispatch(getCurrentUser());
    }
  }, [currentUser]);

  return {
    currentUser,
  };
};

import { AsyncData } from '../../interfaces/AsyncData';
import { UserData } from '../../interfaces/UserData';

export interface State {
  currentUser: AsyncData<UserData>;
}

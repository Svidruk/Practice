import { makeStyles } from '@mui/styles';
import { ScreenWidth } from '@styles/Breakpoints';

export const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  body: {
    maxWidth: ScreenWidth.desktop,
    margin: '0 auto',
  },
  notificationsHolder: {
    position: 'fixed',
    bottom: 0,
    zIndex: 2,
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

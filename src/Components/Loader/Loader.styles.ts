import { makeStyles } from '@mui/styles';
import Colors from '@styles/Colors';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    borderTop: '3px solid transparent',
    borderRight: '3px solid transparent',
    borderBottom: `3px solid ${Colors.gray}`,
    borderLeft: `3px solid ${Colors.gray}`,
    animation: '$spin 0.5s infinite linear',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0)' },
    '100%': { transform: 'rotate(360deg)' },
  },
});

import { makeStyles } from '@mui/styles';
import Colors from '@styles/Colors';

export const useStyles = makeStyles({
  container: {
    display: 'block',
    justifyContent: 'left',
    paddingRight: '16px',
  },

  label: {
    color: Colors.gray,
    fontWeight: 100,
  },

  img: {
    borderRadius: '10px',
    height: 'auto',
    width: '110px',
  },
});

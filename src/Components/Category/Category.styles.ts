import { makeStyles } from '@mui/styles';
import Colors from '@styles/Colors';

export const useStyles = makeStyles({
  container: {
    display: 'block',
    cursor: 'pointer',
  },
  img: {
    borderRadius: '10px',
    width: '110px',
    height: '110px',
    objectFit: 'cover',
  },
  title: {
    fontWeight: 100,
    marginTop: '10px',
    textTransform: 'capitalize',
  },
  currentCategory: {
    color: Colors.gray,
  },
});

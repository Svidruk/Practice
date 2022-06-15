import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    display: 'grid',
    padding: 36,
    position: 'relative',
    gridTemplateColumns: '1fr 1fr',
  },
  closeBtn: {
    position: 'absolute',
    right: 40,
    top: 40,
    cursor: 'pointer',
  },
  img: {
    maxWidth: 743,
    height: 670,
    objectFit: 'fill',
  },
  imgRegister: {
    maxWidth: 543,
  },
});

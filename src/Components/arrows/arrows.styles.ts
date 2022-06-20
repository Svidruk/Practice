import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  nextarrow: {
    border: 'solid black',
    borderWidth: '0 3px 3px 0',
    display: 'inline-block',
    padding: '3px',
    transform: 'rotate(-45deg)',
    webkitTransform: 'rotate(-45deg)',
  },

  backarrow: {
    border: 'solid black',
    borderWidth: '0 3px 3px 0',
    display: 'inline-block',
    padding: '3px',
    transform: 'rotate(135deg)',
    webkitTransform: 'rotate(135deg)',
  },
});

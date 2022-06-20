import { makeStyles } from '@mui/styles';
import Colors from '@styles/Colors';

export const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0px 200px',
    width: 473,
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
  },
  inputBlocks: {
    display: 'flex',
    rowGap: 15,
    flexDirection: 'column',
    margin: '34px 0px',
  },
  inputBlock: {
    display: 'block',
    width: '100%',
  },
  inputField: {
    width: '100%',
    height: 45,
    borderRadius: 40,
    padding: '0px 30px',
    background: 'rgba(168, 172, 184, 0.1)',
    border: 'none',
    outline: 'none',
  },
  errorField: {
    color: Colors.red,
    marginLeft: 30,
    marginTop: 2,
    fontSize: 12,
  },
  button: {
    width: '100%',
    height: 54,
    borderRadius: 40,
    padding: '0px 30px',
    background: Colors.cyan,
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
  },
  title: {
    margin: '8px 0',
  },
  subTitle: {
    color: Colors.gray,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    color: Colors.gray,
  },
  link: {
    textDecoration: 'none',
    color: Colors.cyan,
    fontWeight: 700,
    marginLeft: 4,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  inputBlockCombine: {
    display: 'flex',
    columnGap: 15,
  },
});

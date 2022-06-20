import { makeStyles } from '@mui/styles';
import Colors from '@styles/Colors';

export const useStyles = makeStyles({
  navBar: {
    position: 'sticky',
    top: 0,
    height: '58px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)',
    width: '100%',
    zIndex: 2,
    background: Colors.white,
  },
  navContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 1020,
    margin: '0 auto',
    height: '100%',
  },
  button: {
    width: '100%',
    height: 54,
    borderRadius: 40,
    padding: '8px 30px',
    margin: 8,
    cursor: 'pointer',
    textDecoration: 'none',
  },
  logInButton: {
    color: Colors.black,
    background: Colors.white,
    borderColor: Colors.gray,
    borderStyle: 'solid',
    borderWidth: '1px',
  },
  signUpButton: {
    background: Colors.cyan,
    border: 'none',
    color: '#fff',
  },
  searchBar: {},
  userOptions: {
    display: 'flex',
    alignItems: 'center',
  },
  basket: {
    position: 'relative',
    cursor: 'pointer',

    '& svg': {
      width: 24,
      height: 24,
      fill: Colors.black,
    },
  },
  numberProductsInBasket: {
    position: 'absolute',
    borderRadius: '50%',
    width: 16,
    height: 16,
    color: Colors.white,
    background: Colors.red,
    top: -2,
    left: -4,
    fontSize: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

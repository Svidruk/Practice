import { makeStyles } from '@mui/styles';
import Colors from '@styles/Colors';

export const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0px',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
  },

  categoriesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  productsContainer: {},

  contentContainer: {
    padding: '0px 200px',
  },

  navBar: {
    padding: '0px 200px',
    display: 'flex',
    width: 'available',
    height: '58px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    width: '100%',
    height: 54,
    borderRadius: 40,
    padding: '8px 30px',
    margin: 8,
    background: Colors.cyan,
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    textDecoration: 'none',
  },

  alternateButton: {
    width: '100%',
    height: 54,
    borderRadius: 40,
    padding: '8px 30px',
    margin: 8,
    color: Colors.black,
    background: Colors.white,
    borderColor: Colors.gray,
    borderStyle: 'solid',
    borderWidth: '1px',
    cursor: 'pointer',
    textDecoration: 'none',
  },

  authLinks: {
    position: 'relative',
    justifyContent: 'space-between',
  },

  cart: {},

  welcomingImage: {
    width: 1120,
    marginTop: '25px',
    height: 'auto',
    objectFit: 'fill',
    borderRadius: 20,
  },

  searchBar: {},

  logo: {
    margin: 8,
  },
});

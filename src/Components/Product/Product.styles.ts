import { makeStyles } from '@mui/styles';
import Colors from '@styles/Colors';

export const useStyles = makeStyles({
  container: {
    position: 'relative',
    borderRadius: 20,
    boxShadow: '0px 4px 19px rgba(0, 0, 0, 0.06);',
  },
  inCard: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    background: 'rgba(59, 190, 182, 0.9)',
    width: 78,
    height: 24,
    color: Colors.white,
    top: 12,
    left: 12,
    fontSize: 14,

    '& svg': {
      width: 18,
      height: 18,
    },
  },
  productImage: {
    height: 'auto',
    width: '100%',
    borderRadius: 20,
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 20px',
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 17.5,
    border: 'none',
    fontSize: 18,
    cursor: 'pointer',
    transition: 'all 0.1s ease-in-out',
    '&:hover': {
      transform: 'scale(0.95)',
    },
  },
  addButton: {
    background: Colors.black,
    color: Colors.white,
  },
  subButton: {
    background: '#e5e5e5',
    color: Colors.black,
  },
  productPrice: {
    color: Colors.cyan,
  },
  productName: {
    margin: 0,
    paddingTop: 18,
    paddingBottom: 10,
  },
  soldCount: {
    color: Colors.gray,
    fontWeight: 'lighter',
    margin: 0,
    paddingBottom: 3,
  },
  addToBasketBlock: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    left: 10,
  },
  countInBasket: {
    width: 25,
    textAlign: 'center',
  },
  productManipulation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
});

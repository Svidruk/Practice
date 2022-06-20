import { makeStyles } from '@mui/styles';
import Colors from '@styles/Colors';

export const useStyles = makeStyles({
  container: {
    display: 'block',
    position: 'relative',
    borderRadius: 20,
    boxShadow: '2px 2px 10px 1px #f5f5f5',
    marginRight: 20,
    marginBottom: 20,
    padding: 12,
  },

  inCard: {
    position: 'absolute',
    margin: 0,
    width: 65,
    height: 'auto',
  },

  productImage: {
    width: 200,
    height: 'auto',
    borderRadius: 20,
    margin: -12,
  },

  addButton: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    border: 'none',
    background: Colors.black,
    color: Colors.white,
    paddingBottom: 3,
    fontSize: 18,
    alignContent: 'center',
    '&:active': {
      transform: 'scale(0.95)',
    },
  },

  subButton: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    border: 'none',
    fontSize: 18,
    paddingBottom: 3,
    background: '#e5e5e5',
    color: Colors.black,
    alignContent: 'center',
    textAlign: 'center',
    '&:active': {
      transform: 'scale(0.95)',
    },
  },

  hidden: {
    display: 'none',
  },

  priceLabel: {
    color: Colors.cyan,
  },

  soldLabel: {
    color: Colors.gray,
    fontWeight: 'lighter',
    marginBottom: 10,
  },

  productName: {
    marginTop: 20,
    marginBottom: -10,
  },

  quantitySpan: {
    marginLeft: 30,
  },

  spacing: {
    wordSpacing: 2,
  },
});

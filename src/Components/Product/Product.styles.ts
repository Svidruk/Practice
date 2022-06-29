import { Timeout } from '@enums/Timeout';
import { makeStyles } from '@mui/styles';
import Colors from '@styles/Colors';

export const useStyles = makeStyles({
  container: {
    position: 'relative',
    borderRadius: 20,
    boxShadow: '2px 2px 10px 1px #f5f5f5',
    width: 470,
    height: 116,
    display: 'flex',
    padding: 20,
  },
  productImage: {
    height: 76,
    width: 76,
    borderRadius: 20,
    objectFit: 'contain',
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 22px',
    width: '100%',
  },
  closeBtn: {
    position: 'absolute',
    cursor: 'pointer',
    right: 20,

    '& svg': {
      width: 10,
      height: 10,
      fill: Colors.gray,
    },
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
  name: {
    margin: 0,
    paddingTop: 18,
    paddingBottom: 10,
  },
  soldAmountCount: {
    color: Colors.gray,
    fontWeight: 'lighter',
    margin: 0,
    marginBottom: 3,
  },
  addToBasketBlock: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'end',
    justifySelf: 'end',
    marginLeft: 'auto',
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
    width: '100%',
  },
  deleted: {
    animation: `$delete ${Timeout.Miliseconds300}ms ease-in forwards`,
  },
  '@keyframes delete': {
    '100%': { height: 0, opacity: 0 },
  },
  homeContainer: {
    flexDirection: 'column',
    width: 'auto',
    height: 'auto',
    padding: '0px 0px',
  },
  homeProductImage: {
    height: 160,
    width: '100%',
  },
  homeProductInfo: {
    padding: '0px 12px',
  },
});

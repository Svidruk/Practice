import { Timeout } from '@enums/Timeout';
import { makeStyles } from '@mui/styles';
import Colors from '@styles/Colors';

export const useStyles = makeStyles({
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 2,
  },
  root: {
    position: 'fixed',
    width: 560,
    height: '100%',
    right: 0,
    top: 0,
    backgroundColor: Colors.white,
    zIndex: 2,
    padding: 40,
  },
  closeBtn: {
    cursor: 'pointer',
    width: 20,
    height: 20,
    marginLeft: 'auto',
  },
  products: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 15,
    maxHeight: 470,
    overflowY: 'auto',
    overflowX: 'hidden',

    '&::-webkit-scrollbar': {
      width: 5,
      background: Colors.white,
      boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: Colors.gray,
      borderRadius: 10,
      width: 2,
    },
  },
  sumBlock: {
    height: 108,
    width: '100%',
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.12)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderRadius: '50px 50px 0px 0px',
    padding: '20px 20px 32px 34px',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  productSumPrice: {
    padding: 0,
    margin: 0,
  },
  productSumPriceTitle: {
    fontSize: 14,
    color: Colors.gray,
    marginTop: 4,
  },
  checkoutBtn: {
    width: 170,
    height: 54,
    backgroundColor: Colors.cyan,
    color: Colors.white,
    textAlign: 'center',
    borderRadius: 40,
    border: 'none',
    cursor: 'pointer',
  },
  slideUp: {
    animation: `$slideUp ${Timeout.Miliseconds500}ms ease-in forwards`,
  },
  '@keyframes slideUp': {
    from: {},
    to: {
      height: '120%',
      borderRadius: 0,
    },
  },
  checkoutBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 308,
    margin: '0 auto',
    animation: `$showUp ${Timeout.Miliseconds500}ms ease-in forwards`,
  },
  '@keyframes showUp': {
    from: { marginTop: 1000, opacity: 0 },
    to: { marginTop: 0, opacity: 1 },
  },
  checkSvgBlock: {
    '& svg': {
      width: 24,
      height: 24,
    },
  },
  checkCircle: {
    borderRadius: '50%',
    border: '1px solid',
    borderColor: Colors.cyan,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  check1Circle: {
    width: 55,
    height: 55,
    background: Colors.cyan,
  },
  check2Circle: {
    width: 92,
    height: 92,
  },
  check3Circle: {
    width: 132,
    height: 132,
  },
  mainText: {
    marginTop: 40,
  },
  secondText: {
    marginTop: 18,
    textAlign: 'center',
  },
  divider: {
    borderBottom: `1px dashed ${Colors.gray}`,
    width: '100%',
    margin: '40px 0',
  },
  totalBlock: {
    display: 'flex',
    width: '100%',
    height: 66,
    background: 'rgba(168, 172, 184, 0.1);',
    borderRadius: 18,
    padding: '15px 20px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalBlockTitle: {
    textTransform: 'uppercase',
    fontSize: 14,
  },
  totalBlockPrice: {
    color: Colors.cyan,
  },
});

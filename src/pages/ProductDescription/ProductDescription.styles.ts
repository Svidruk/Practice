import { makeStyles } from '@mui/styles';
import Colors from '@styles/Colors';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },
  back: {
    textDecoration: 'none',
    color: Colors.gray,
    fontSize: 12,
    margin: '24px 0',
    wordSpacing: 10,
  },
  description: {
    display: 'flex',
  },
  productImage: {
    width: 540,
    borderRadius: 20,
    marginRight: 32,
    height: 400,
    objectFit: 'contain',
  },
  extraInfo: {},
  line: {
    margin: '32px 0',
    border: '1px solid #A8ACB8',
    opacity: 0.2,
    background: '#A8ACB8',
  },
  header: {
    marginBottom: '48px',
  },
  text: {
    color: '#313131',
    fontSize: 14,
  },
  soldAmountCount: {
    color: Colors.gray,
    fontWeight: 'lighter',
    margin: '12px 0',
    paddingBottom: 3,
  },
  productPrice: {
    color: Colors.cyan,
    fontSize: 32,
  },
  button: {
    width: 148,
    height: 54,
    borderRadius: 40,
    margin: 8,
    cursor: 'pointer',
    textDecoration: 'none',
    color: Colors.cyan,
    background: Colors.white,
    borderColor: Colors.cyan,
    borderStyle: 'solid',
    borderWidth: '1px',
  },
  productDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgUrl: {
    width: '100%',
    height: 400,
    objectFit: 'contain',
  },
  imagesFlex: {
    display: 'flex',
    columnGap: 10,
    maxWidth: '100%',
    margin: '32px 0',
    height: 400,
  },
  imageFlex: {
    width: '39%',
    objectFit: 'contain',
  },
  imageFlexLeft: {
    width: '60%',
  },
});

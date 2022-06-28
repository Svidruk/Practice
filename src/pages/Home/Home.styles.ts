import { makeStyles } from '@mui/styles';
import { Breakpoints } from '@styles/Breakpoints';
import Colors from './../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },
  categoriesContainer: {
    display: 'flex',
  },
  productsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    justifyContent: 'left',
    columnGap: '20px',
    rowGap: '20px',

    [Breakpoints.tablet]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },

    [Breakpoints.mobile]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
  authLinks: {
    position: 'relative',
    justifyContent: 'space-between',
  },
  welcomingImage: {
    marginTop: '25px',
    maxHeight: 400,
    objectFit: 'cover',
    borderRadius: 20,
  },
  imageContainer: {
    display: 'flex',
  },
  paginationBlock: {
    position: 'absolute',
    bottom: 0,
    height: 160,
    zIndex: 2,
    width: '100%',
    background: 'linear-gradient(360deg, #FFFFFF 42.16%, rgba(255, 255, 255, 0) 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewMore: {
    width: 300,
    borderRadius: 50,
    background: 'rgba(168, 172, 184, 0.1)',
    padding: 10,
    marginTop: 60,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  viewMoreTitle: {
    textAlign: 'center',
    margin: '0 auto',
  },
  arrowDown: {
    width: 38,
    height: 38,
    background: Colors.white,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noData: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 400,
    background: 'rgba(168, 172, 184, 0.1)',
    borderRadius: 20,
    flexDirection: 'column',
  },
  smile: {
    fontSize: 160,
  },
  categorySkeleton: {
    width: '110px',
    height: '110px',
    background: 'rgba(168, 172, 184, 1)',
  },
});

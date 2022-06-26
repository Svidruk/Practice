import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    width: 1020,
    margin: '0 auto',
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
  },
  authLinks: {
    position: 'relative',
    justifyContent: 'space-between',
  },
  welcomingImage: {
    marginTop: '25px',
    height: 'auto',
    objectFit: 'fill',
    borderRadius: 20,
  },
  imageContainer: {
    marginBottom: 30,
  },
});

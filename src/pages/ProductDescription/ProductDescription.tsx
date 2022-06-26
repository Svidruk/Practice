import { useStyles } from './ProductDescription.styles';
import { Link } from 'react-router-dom';
import { Paths } from '@enums/Paths';
import { ReactComponent as Back } from '@assets/icons/arrowback.svg';
import img from '@assets/img/Rectangle 283.png';
import classNames from 'classnames';

export const ProductDescription = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Link to={Paths.root} className={styles.back}>
        <Back /> BACK
      </Link>
      <div className={styles.description}>
        <img className={styles.productImage} src={img} alt="product image" />
        <div>
          <h2>Wiley Saddle Bag - Fossil</h2>
          <h5 className={styles.soldCount}>232 Sold</h5>
          <text className={styles.text}>
            Finish every look on a note of Parisian chic with the Lou Camera crossbody bag from Saint Laurent, presented
            here in cream beige. Made in Italy from chevron matelassé leather, the design is adorned with golden
            hardware.
          </text>
          <hr className={styles.line} />
          <div className={styles.productDiv}>
            <b className={styles.productPrice}>$120</b>
            <button className={styles.button}>Add To Cart</button>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.extraInfo}>
        <h3 className={styles.header}>Extra Information</h3>
        <img className={styles.image} src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" />
        <h4>Take a look at a new style!</h4>
        <text className={styles.text}>
          No matter where you're heading, the Uptown wallet on chain from Saint Laurent will lend Parisian glamour to
          your looks. The slimline design comes in moss green leather embossed with a croc-effect, and its envelope
          silhouette is completed with a gold-toned iteration of the brand's iconic YSL monogram plaque.Suited for
          day-to-night styles, th e Uptown clutch from Saint Laurent will lend any look a touch of Parisian glamour.It's
          crafted in Italy from black leather and works an envelope silhouette with the monogram logo in glossy golden
          hardware. Carry yours in-hand or swing it from the adjustable shoulder strap.
        </text>
        <div className={styles.imagesFlex}>
          <img
            className={classNames(styles.imageFlex, styles.imageFlexLeft)}
            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
          />
          <img className={styles.imageFlex} src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" />
        </div>
        <text>
          No matter where you're heading, the Uptown wallet on chain from Saint Laurent will lend Parisian glamour to
          your looks. The slimline design comes in moss green leather embossed with a croc-effect, and its envelope
          silhouette is completed with a gold-toned iteration of the brand's iconic YSL monogram plaque.Suited for
          day-to-night styles, the Uptown clutch from Saint Laurent will lend any look a touch of Parisian glamour.It's
          crafted in Italy from black leather and works an envelope silhouette with the monogram logo in glossy golden
          hardware. Carry yours in-hand or swing it from the adjustable shoulder strap.
        </text>
      </div>
    </div>
  );
};

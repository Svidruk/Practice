import { useStyles } from './ProductDescription.styles';
import { Link } from 'react-router-dom';
import { Paths } from '@enums/Paths';
import { ReactComponent as Back } from '@assets/icons/arrowback.svg';
import classNames from 'classnames';
import { useProductDescription } from './hooks/useProductDescription';
import { DataState } from '@enums/DataState';
import Loader from '@components/Loader/Loader';

export const ProductDescription = () => {
  const styles = useStyles();

  const { productDescriptionData } = useProductDescription();
  return (
    <>
      {productDescriptionData.state === DataState.Pending ? (
        <Loader />
      ) : (
        productDescriptionData.data && (
          <div className={styles.root}>
            <Link to={Paths.root} className={styles.back}>
              <Back /> BACK
            </Link>
            <div className={styles.description}>
              <img className={styles.productImage} src={productDescriptionData.data.imgUrl} alt="product imgUrl" />
              <div>
                <h2>{productDescriptionData.data.name}</h2>
                <h5 className={styles.soldAmountCount}>{productDescriptionData.data.soldAmount} sold</h5>
                <text className={styles.text}>{productDescriptionData.data.description}</text>
                <hr className={styles.line} />
                <div className={styles.productDiv}>
                  <b className={styles.productPrice}>${productDescriptionData.data.price}</b>
                  <button className={styles.button}>Add To Cart</button>
                </div>
              </div>
            </div>
            <hr className={styles.line} />
            <div className={styles.extraInfo}>
              <h3 className={styles.header}>Extra Information</h3>
              <img className={styles.imgUrl} src={productDescriptionData.data.imgUrl} />
              <h4>Take a look at a new style!</h4>
              <text className={styles.text}>{productDescriptionData.data.extraInformation}</text>
              <div className={styles.imagesFlex}>
                <img
                  className={classNames(styles.imageFlex, styles.imageFlexLeft)}
                  src={productDescriptionData.data.imgUrl}
                />
                <img className={styles.imageFlex} src={productDescriptionData.data.imgUrl} />
              </div>
              <text>{productDescriptionData.data.extraInformation}</text>
            </div>
          </div>
        )
      )}
    </>
  );
};

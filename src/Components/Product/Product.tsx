import { useStyles } from './Product.styles';
import { FC, useState } from 'react';
import { ReactComponent as Close } from '@assets/icons/Close.svg';
import classNames from 'classnames';
import { Timeout } from '@enums/Timeout';
import { useDispatch } from 'react-redux';
import { changeProductQuantityAction, removeProductAction } from '@pages/Basket/redux/actions';
import { ProductData } from '@interfaces/ProductData';
import { Paths } from '@enums/Paths';
import { Link } from 'react-router-dom';

interface Props extends ProductData {
  isHomePageProduct?: boolean;
}

const Product: FC<Props> = ({ id, image, name, price, quantity, sold, category, isHomePageProduct }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [isClickedDeleteProduct, setIsClickedDeleteProduct] = useState(false);

  const removeProductFromBasket = () => {
    if (!isHomePageProduct) {
      setIsClickedDeleteProduct(true);
    }
    setTimeout(() => dispatch(removeProductAction(id)), Timeout.Miliseconds300);
  };

  return (
    <div
      className={classNames(
        styles.container,
        { [styles.homeContainer]: isHomePageProduct },
        { [styles.deleted]: isClickedDeleteProduct }
      )}
    >
      {!isHomePageProduct && (
        <div className={styles.closeBtn} onClick={removeProductFromBasket}>
          <Close />
        </div>
      )}
      <Link to={`${Paths.product}/${id}`}>
        <img
          className={classNames(styles.productImage, { [styles.homeProductImage]: isHomePageProduct })}
          src={image}
          alt="Product Image"
        />
      </Link>
      <div className={classNames(styles.productInfo, { [styles.homeProductInfo]: isHomePageProduct })}>
        <Link to={`${Paths.product}/${id}`}>
          <h4 className={styles.name}>{name}</h4>
        </Link>
        {isHomePageProduct && <h5 className={styles.soldCount}>{sold ? sold : 0} Sold</h5>}
        <div className={styles.productManipulation}>
          <b className={styles.productPrice}>${price.toFixed(2)}</b>
          <div className={styles.addToBasketBlock}>
            {quantity !== 0 && (
              <>
                <button
                  onClick={() => {
                    if (quantity - 1 === 0) {
                      removeProductFromBasket();
                    } else {
                      dispatch(
                        changeProductQuantityAction({ id, image, name, price, category, quantity: quantity - 1 })
                      );
                    }
                  }}
                  className={classNames(styles.button, styles.subButton)}
                >
                  -
                </button>
                <b className={styles.countInBasket}>{quantity}</b>
              </>
            )}
            <button
              onClick={() =>
                dispatch(changeProductQuantityAction({ id, image, name, price, category, quantity: quantity + 1 }))
              }
              className={classNames(styles.button, styles.addButton)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

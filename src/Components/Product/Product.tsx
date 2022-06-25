import { useStyles } from './Product.styles';
import { FC, useState } from 'react';
import { ReactComponent as Close } from '@assets/icons/Close.svg';
import classNames from 'classnames';
import { Timeout } from '@enums/Timeout';
import { useDispatch } from 'react-redux';
import { changeProductQuantityAction, removeProductAction } from '@pages/Basket/redux/actions';
import { ProductData } from '@interfaces/ProductData';

interface Props extends ProductData {
  isHomePageProduct?: boolean;
}

const Product: FC<Props> = ({ id, image, name, price, quantity, sold, isHomePageProduct }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [isClickedDeleteProduct, setIsClickedDeleteProduct] = useState(false);

  const removeProductFromBasket = () => {
    setIsClickedDeleteProduct(true);
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
      <img
        className={classNames(styles.productImage, { [styles.homeProductImage]: isHomePageProduct })}
        src={image}
        alt="Product Image"
      />
      <div className={classNames(styles.productInfo, { [styles.homeProductInfo]: isHomePageProduct })}>
        <h4 className={styles.name}>{name}</h4>
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
                      dispatch(changeProductQuantityAction({ id, image, name, price, quantity: quantity - 1 }));
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
              onClick={() => dispatch(changeProductQuantityAction({ id, image, name, price, quantity: quantity + 1 }))}
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

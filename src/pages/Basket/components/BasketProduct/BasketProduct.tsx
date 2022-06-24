import { useStyles } from './BasketProduct.styles';
import { FC, useState } from 'react';
import { ReactComponent as Close } from '@assets/icons/Close.svg';
import classNames from 'classnames';
import { Timeout } from '@enums/Timeout';
import { ProductData } from '@interfaces/ProductData';
import { useDispatch } from 'react-redux';
import { changeProductQuantityAction, removeProductAction } from '@pages/Basket/redux/actions';

const BasketProduct: FC<ProductData> = (props) => {
  const { id, image, name, price, quantity } = props;
  const styles = useStyles();
  const dispatch = useDispatch();
  const [isClickedDeleteProduct, setIsClickedDeleteProduct] = useState(false);

  const removeProductFromBasket = () => {
    setIsClickedDeleteProduct(true);
    setTimeout(() => dispatch(removeProductAction(id)), Timeout.Miliseconds300);
  };

  return (
    <div className={classNames(styles.container, { [styles.deleted]: isClickedDeleteProduct })}>
      <div className={styles.closeBtn} onClick={removeProductFromBasket}>
        <Close />
      </div>
      <img className={styles.productImage} src={image} alt="Product Image" />
      <div className={styles.productInfo}>
        <h4 className={styles.name}>{name}</h4>
        <b className={styles.productPrice}>${price.toFixed(2)}</b>
      </div>
      <div className={styles.addToBasketBlock}>
        {quantity !== 0 && (
          <>
            <button
              onClick={() => dispatch(changeProductQuantityAction({ ...props, quantity: props.quantity - 1 }))}
              className={classNames(styles.button, styles.subButton)}
            >
              -
            </button>
            <b className={styles.countInBasket}>{quantity}</b>
          </>
        )}
        <button
          onClick={() => dispatch(changeProductQuantityAction({ ...props, quantity: props.quantity + 1 }))}
          className={classNames(styles.button, styles.addButton)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BasketProduct;

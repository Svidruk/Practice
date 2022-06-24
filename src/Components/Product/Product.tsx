import { useStyles } from './Product.styles';
import { FC, useState } from 'react';
import { ReactComponent as Basket } from '@assets/icons/Basket.svg';
import classNames from 'classnames';

interface Props {
  image: string;
  name: string;
  price: number;
  sold: number;
  quantity: number;
}

const Product: FC<Props> = ({ image, name, price, sold, quantity }) => {
  const styles = useStyles();

  const [numberProductsInBasket, setNumberProductsInBasket] = useState(quantity);

  return (
    <div className={styles.container}>
      {numberProductsInBasket !== 0 && (
        <div className={styles.inCard}>
          <Basket />
          <p>In card</p>
        </div>
      )}
      <img className={styles.productImage} src={image} alt="Product Image" />
      <div className={styles.productInfo}>
        <h4 className={styles.name}>{name}</h4>
        <h5 className={styles.soldCount}>{sold} Sold</h5>
        <div className={styles.productManipulation}>
          <b className={styles.productPrice}>${price.toFixed(2)}</b>
          <div className={styles.addToBasketBlock}>
            {numberProductsInBasket !== 0 && (
              <>
                <button
                  onClick={() => {
                    if (numberProductsInBasket > 0) setNumberProductsInBasket(numberProductsInBasket - 1);
                  }}
                  className={classNames(styles.button, styles.subButton)}
                >
                  -
                </button>
                <b className={styles.countInBasket}>{numberProductsInBasket}</b>
              </>
            )}
            <button
              onClick={() => setNumberProductsInBasket(numberProductsInBasket + 1)}
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

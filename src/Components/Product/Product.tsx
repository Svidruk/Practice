import { useStyles } from './Product.styles';
import { FC, useState } from 'react';
import inCard from '@assets/img/inCard.png';

interface Props {
  image: string;
  productName: string;
  price: number;
  sold: number;
  initialQuantity: number;
}

const Product: FC<Props> = ({ image, productName, price, sold, initialQuantity }) => {
  const styles = useStyles();

  const [quantity, setQuantity] = useState(initialQuantity);

  return (
    <div className={styles.container}>
      <img className={styles.inCard} src={inCard}></img>
      <img className={styles.productImage} src={image} alt="" />
      <h4 className={styles.productName}>{productName}</h4>
      <h5 className={styles.soldLabel}>{sold} Sold</h5>
      <div>
        <b className={styles.priceLabel}>${price.toFixed(2)}</b>
        <span className={styles.quantitySpan}>
          {quantity != 0 && (
            <button
              onClick={() => {
                if (quantity > 0) setQuantity(quantity - 1);
              }}
              className={styles.subButton}
            >
              -
            </button>
          )}
          <b className={styles.spacing}> {quantity} </b>
          <button onClick={() => setQuantity(quantity + 1)} className={styles.addButton}>
            +
          </button>
        </span>
      </div>
    </div>
  );
};

export default Product;

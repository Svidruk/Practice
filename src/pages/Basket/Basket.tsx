import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useStyles } from './Basket.styles';
import { setIsBasketOpen } from './redux/actions';
import { ReactComponent as Close } from '@assets/icons/Close.svg';
import BasketProduct from './components/BasketProduct/BasketProduct';
import { useBasketData } from './hooks/useBasketData';
import classNames from 'classnames';
import { Timeout } from '@enums/Timeout';
import { ReactComponent as Check } from '@assets/icons/Check.svg';

export const Basket = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { basketData } = useBasketData();
  const [isClickedOnCheckout, setisClickedOnCheckout] = useState(false);
  const [isDisplayedCheckout, setIsDisplayedCheckout] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckout = useCallback(() => {
    setisClickedOnCheckout(true);
    setTimeout(() => setIsDisplayedCheckout(true), Timeout.Miliseconds500);
  }, []);

  const handleOverlayClose = useCallback(() => {
    dispatch(setIsBasketOpen());
  }, []);

  useEffect(() => {
    const handleEscapeButtonPressed = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        handleOverlayClose();
      }
    };
    document.addEventListener('keydown', handleEscapeButtonPressed);
    return () => document.removeEventListener('keydown', handleEscapeButtonPressed);
  }, [handleOverlayClose]);

  useEffect(() => {
    if (basketData.data?.products) {
      setTotalPrice(basketData.data?.products.reduce((acc, { price, quantity }) => acc + price * quantity, 0));
    }
  }, [basketData]);

  return (
    <div className={styles.overlay} onClick={handleOverlayClose}>
      <div className={styles.root} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeBtn} onClick={handleOverlayClose}>
          <Close />
        </div>
        {isDisplayedCheckout ? (
          <div className={styles.checkoutBlock}>
            <div className={styles.checkSvgBlock}>
              <div className={classNames(styles.checkCircle, styles.check3Circle)}>
                <div className={classNames(styles.checkCircle, styles.check2Circle)}>
                  <div className={classNames(styles.checkCircle, styles.check1Circle)}>
                    <Check />
                  </div>
                </div>
              </div>
            </div>
            <h1 className={styles.mainText}>Congratulations!</h1>
            <p className={styles.secondText}>Your order has successfully placed and started processing.</p>
            <div className={styles.divider}></div>
            <div className={styles.totalBlock}>
              <div className={styles.totalBlockTitle}>total</div>
              <h2 className={styles.totalBlockPrice}>${totalPrice.toFixed(2)}</h2>
            </div>
          </div>
        ) : (
          <div>
            <h2>My Cart</h2>
            <div className={styles.products}>
              {basketData.data?.products.map((product) => (
                <BasketProduct {...product} key={product.id} />
              ))}
            </div>
            <div className={classNames(styles.sumBlock, { [styles.slideUp]: isClickedOnCheckout })}>
              <div>
                <h2 className={styles.productSumPrice}>${totalPrice.toFixed(2)}</h2>
                <div className={styles.productSumPriceTitle}>Total price</div>
              </div>
              <button className={styles.checkoutBtn} onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

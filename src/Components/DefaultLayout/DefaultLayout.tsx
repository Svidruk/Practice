import Navbar from '@components/Navbar/Navbar';
import { Basket } from '@pages/Basket/Basket';
import { getIsBasketOpen } from '@pages/Basket/redux/selectors';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './DefaultLayout.styles';

interface Props {
  children: ReactNode;
}

export const DefaultLayout: React.FC<Props> = ({ children }) => {
  const styles = useStyles();
  const isBasketOpen = useSelector(getIsBasketOpen);

  return (
    <div className={styles.root}>
      <Navbar />
      <div className={styles.body}>{children}</div>
      {isBasketOpen && <Basket />}
    </div>
  );
};

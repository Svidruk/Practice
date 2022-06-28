import Navbar from '@components/Navbar/Navbar';
import { Notifications } from '@components/Notifications';
import { Basket } from '@pages/Basket/Basket';
import { getIsBasketOpen } from '@pages/Basket/redux/selectors';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './DefaultLayout.styles';

interface Props {
  children: ReactNode;
  isAuth?: boolean;
}

export const DefaultLayout: React.FC<Props> = ({ children, isAuth }) => {
  const styles = useStyles();
  const isBasketOpen = useSelector(getIsBasketOpen);

  return (
    <div className={styles.root}>
      {!isAuth && <Navbar />}
      {!isAuth ? <div className={styles.body}>{children}</div> : <div>{children}</div>}
      {isBasketOpen && <Basket />}
      <div className={styles.notificationsHolder}>
        <Notifications />
      </div>
    </div>
  );
};

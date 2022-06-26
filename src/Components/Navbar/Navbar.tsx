import { useStyles } from './Navbar.styles';
import { ChangeEvent, FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '@enums/Paths';
import { ReactComponent as Logo } from '@assets/icons/Logo.svg';
import classNames from 'classnames';
import { ReactComponent as Basket } from '@assets/icons/Basket.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setIsBasketOpen } from '@pages/Basket/redux/actions';
import { getIsBasketOpen } from '@pages/Basket/redux/selectors';
import { ReactComponent as Search } from '@assets/icons/Search.svg';
import { setSortInfo } from '@pages/Home/redux/actions';
import { RootState } from 'redux/store';

const Navbar: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const isBasketOpen = useSelector(getIsBasketOpen);
  const sortInfo = useSelector((state: RootState) => state.homeReducer.sortInfo);

  const handleBasketOpen = useCallback(() => {
    dispatch(setIsBasketOpen());
  }, [isBasketOpen]);

  const filterProducts = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortInfo({ ...sortInfo, searchByText: e.target.value }));
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.navContent}>
        <Link to={Paths.root}>
          <Logo />
        </Link>
        <div className={styles.searchBar}>
          <Search />
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchBarInput}
            onChange={filterProducts}
            value={sortInfo.searchByText}
          />
        </div>
        <div className={styles.userOptions}>
          <div className={styles.basket} onClick={handleBasketOpen}>
            <div className={styles.numberProductsInBasket}>3</div>
            <Basket />
          </div>
          <div>
            <Link to={Paths.login} className={classNames(styles.button, styles.logInButton)}>
              Log In
            </Link>
            <Link to={Paths.register} className={classNames(styles.button, styles.signUpButton)}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

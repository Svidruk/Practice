import { useStyles } from './Navbar.styles';
import { ChangeEvent, FC, useCallback, useState } from 'react';
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
import { RootState } from '@redux/store';
import { ReactComponent as Burger } from '@assets/icons/Burger.svg';
import { selectUser } from '@redux/user/selectors';
import { clearAuthToken } from '@helpers/auth';
import { DataState } from '@enums/DataState';
import { setCurrentUser } from '@redux/user/actions';

const Navbar: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const isBasketOpen = useSelector(getIsBasketOpen);
  const sortInfo = useSelector((state: RootState) => state.homeReducer.sortInfo);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const currentUser = useSelector(selectUser);

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
          {currentUser ? (
            <div className={styles.menu} onClick={() => setIsDropDownOpen((isDropDownOpen) => !isDropDownOpen)}>
              <div className={styles.burger}>
                <Burger />
              </div>
              <div className={styles.user}>{currentUser?.fullName[0].toUpperCase()}</div>
              {isDropDownOpen && (
                <div className={styles.dropDown} onClick={(e) => e.stopPropagation()}>
                  <div
                    className={classNames(styles.button, styles.logOutButton)}
                    onClick={() => {
                      clearAuthToken();
                      dispatch(setCurrentUser({ data: null, state: DataState.Fulfilled }));
                    }}
                  >
                    Log Out
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <Link to={Paths.login} className={classNames(styles.button, styles.logInButton)}>
                Log In
              </Link>
              <Link to={Paths.register} className={classNames(styles.button, styles.signUpButton)}>
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

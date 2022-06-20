import { useStyles } from './Navbar.styles';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '@enums/Paths';
import { ReactComponent as Logo } from '@assets/icons/Logo.svg';
import classNames from 'classnames';
import { ReactComponent as Basket } from '@assets/icons/Basket.svg';

const Navbar: FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.navBar}>
      <div className={styles.navContent}>
        <Logo />
        <div className={styles.searchBar}></div>
        <div className={styles.userOptions}>
          <div className={styles.basket}>
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

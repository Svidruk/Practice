import { useStyles } from './Home.styles';
import { Link } from 'react-router-dom';
import { Paths } from '@enums/Paths';
import logo from '@assets/img/logo.png';
import welcomingImage from '@assets/img/Autumn.png';
import Category from '@components/Home/Category';
import img from '@assets/img/allCategories.png';

export const Home = () => {
  const styles = useStyles();

  return (
    <div className={styles.formContainer}>
      <div className={styles.navBar}>
        <img className={styles.logo} src={logo} alt="logo"></img>
        <div className={styles.searchBar}></div>
        <svg className={styles.cart}></svg>
        <div>
          <Link to={Paths.login} className={styles.alternateButton}>
            Log In
          </Link>
          <Link to={Paths.register} className={styles.button}>
            Sign Up
          </Link>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <img className={styles.welcomingImage} src={welcomingImage} alt="welcoming image" />
        <h3>Categories</h3>
        <div className={styles.categoriesContainer}>
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
        </div>
        <div className={styles.productsContainer}></div>
      </div>
    </div>
  );
};

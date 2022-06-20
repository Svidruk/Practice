import { useStyles } from './Home.styles';
import { Link } from 'react-router-dom';
import { Paths } from '@enums/Paths';
import logo from '@assets/img/logo.png';
import welcomingImage from '@assets/img/Autumn.png';
import Category from '@components/Category/Category';
import Product from '@components/Product/Product';
import img from '@assets/img/allCategories.png';
import ProdImg from '@assets/img/Rectangle 283.png';
import Slider from 'react-slick';

const categoryScrollSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 9,
  slidesToScroll: 3,
  nextArrow: <div className="vasya">12</div>,
  prevArrow: <div className="vasya2">12</div>,
};

const photoScrollSettings = {
  dots: true,
  infinite: true,
  speed: 2500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 7500,
  autoplay: true,
};

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
        <Slider className={styles.imageContainer} {...photoScrollSettings}>
          <img className={styles.welcomingImage} src={welcomingImage} alt="welcoming image" />
          <img className={styles.welcomingImage} src={welcomingImage} alt="welcoming image" />
        </Slider>
        <h3>Categories</h3>
        <Slider className={styles.categoriesContainer} {...categoryScrollSettings}>
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
          <Category label="all categories" image={img} />
        </Slider>
        <h3>Products</h3>
        <div className={styles.productsContainer}>
          <Product image={ProdImg} productName="someProduct" price={120} sold={3} initialQuantity={0} />
          <Product image={ProdImg} productName="someProduct" price={120} sold={3} initialQuantity={0} />
          <Product image={ProdImg} productName="someProduct" price={120} sold={3} initialQuantity={0} />
          <Product image={ProdImg} productName="someProduct" price={120} sold={3} initialQuantity={0} />
          <Product image={ProdImg} productName="someProduct" price={120} sold={3} initialQuantity={0} />
          <Product image={ProdImg} productName="someProduct" price={120} sold={3} initialQuantity={0} />
        </div>
      </div>
    </div>
  );
};

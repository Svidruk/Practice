import { useStyles } from './Home.styles';
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
    <div className={styles.root}>
      <Slider className={styles.imageContainer} {...photoScrollSettings}>
        <img className={styles.welcomingImage} src={welcomingImage} alt="welcoming image" />
        <img className={styles.welcomingImage} src={welcomingImage} alt="welcoming image" />
      </Slider>
      <h3>Categories</h3>
      <Slider className={styles.categoriesContainer} {...categoryScrollSettings}>
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <Category key={i} label="all categories" image={img} />
          ))}
      </Slider>
      <h3>Products</h3>
      <div className={styles.productsContainer}>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Product key={i} image={ProdImg} name="Recycled Nylon in Black" price={120} sold={3} quantity={0} />
          ))}
      </div>
    </div>
  );
};

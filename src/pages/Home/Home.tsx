import { useStyles } from './Home.styles';
import welcomingImage from '@assets/img/Autumn.png';
import Category from '@components/Category/Category';
import Slider from 'react-slick';
import { useHomeData } from './hooks/useHomeData';
import Product from '@components/Product/Product';

const categoryScrollSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 9,
  slidesToScroll: 3,
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
  const { homeData } = useHomeData();

  return (
    <div className={styles.root}>
      <Slider className={styles.imageContainer} {...photoScrollSettings}>
        <img className={styles.welcomingImage} src={welcomingImage} alt="welcoming image" />
        <img className={styles.welcomingImage} src={welcomingImage} alt="welcoming image" />
      </Slider>
      <h3>Categories</h3>
      <Slider className={styles.categoriesContainer} {...categoryScrollSettings}>
        {homeData?.data?.categories.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </Slider>
      <h3>Products</h3>
      <div className={styles.productsContainer}>
        {homeData?.data?.products.map((product) => (
          <Product key={product.id} {...product} isHomePageProduct />
        ))}
      </div>
    </div>
  );
};

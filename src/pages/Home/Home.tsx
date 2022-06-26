import { useStyles } from './Home.styles';
import welcomingImage from '@assets/img/Autumn.png';
import Category from '@components/Category/Category';
import Slider from 'react-slick';
import { useHomeData } from './hooks/useHomeData';
import Product from '@components/Product/Product';
import { ReactComponent as Arrow } from '@assets/icons/Arrow.svg';
import { useDispatch } from 'react-redux';
import { getHomeData } from './redux/actions';

const categoryScrollSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
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
  const dispatch = useDispatch();
  return (
    <div className={styles.root}>
      <Slider className={styles.imageContainer} {...photoScrollSettings}>
        <img className={styles.welcomingImage} src={welcomingImage} alt="welcoming image" />
        <img className={styles.welcomingImage} src={welcomingImage} alt="welcoming image" />
      </Slider>
      <h3>Categories</h3>
      {homeData?.data?.categories && homeData?.data?.categories.length > 0 && (
        <Slider className={styles.categoriesContainer} {...categoryScrollSettings}>
          {homeData.data.categories.map((category) => (
            <Category key={category.id} {...category} />
          ))}
        </Slider>
      )}
      <h3>Products</h3>
      <div className={styles.productsContainer}>
        {homeData?.data?.products.map((product) => (
          <Product key={product.id} {...product} isHomePageProduct />
        ))}
      </div>
      {homeData && homeData.data && homeData.data.products && homeData.data?.products.length % 10 === 0 && (
        <div className={styles.paginationBlock}>
          <div
            className={styles.viewMore}
            onClick={() => {
              if (homeData.data) dispatch(getHomeData({ limit: 10, offset: homeData.data.products.length }));
            }}
          >
            <div className={styles.viewMoreTitle}>View more products</div>
            <div className={styles.arrowDown}>
              <Arrow />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

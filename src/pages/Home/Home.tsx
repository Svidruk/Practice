import { useStyles } from './Home.styles';
import Category from '@components/Category/Category';
import Slider from 'react-slick';
import { useHomeData } from './hooks/useHomeData';
import Product from '@components/Product/Product';
import { ReactComponent as Arrow } from '@assets/icons/Arrow.svg';
import { useDispatch } from 'react-redux';
import { getHomeData } from './redux/actions';
import { categoryScrollSettings, photoScrollSettings } from './settings/SliderSettings';

export const Home = () => {
  const styles = useStyles();
  const { homeData } = useHomeData();
  const dispatch = useDispatch();
  return (
    <div className={styles.root}>
      <Slider className={styles.imageContainer} {...photoScrollSettings}>
        <img
          className={styles.welcomingImage}
          src="https://static.vecteezy.com/system/resources/thumbnails/001/803/442/original/ukraine-flag-loop-free-video.jpg"
          alt="welcoming imgUrl"
        />
        <img
          className={styles.welcomingImage}
          src="https://lightfield.ua/img/studios/interior/img-cafeshop-1.jpg"
          alt="welcoming imgUrl"
        />
        <img
          className={styles.welcomingImage}
          src="https://img.freepik.com/free-photo/abstract-blur-defocused-shopping-mall-center-department-store_1203-9225.jpg?w=2000"
          alt="welcoming imgUrl"
        />
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
      {homeData && homeData.data && homeData.data.products && homeData.data?.products.length > 0 ? (
        <div className={styles.productsContainer}>
          {homeData?.data?.products.map((product) => (
            <Product key={product.id} {...product} isHomePageProduct />
          ))}
        </div>
      ) : (
        <div className={styles.noData}>
          <div className={styles.smile}>🥺</div>
          <h1>Can't find such products</h1>
        </div>
      )}
      {homeData &&
        homeData.data &&
        homeData.data.products &&
        homeData.data?.products.length > 0 &&
        homeData.data?.products.length % 10 === 0 && (
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

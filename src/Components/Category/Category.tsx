import { useStyles } from './Category.styles';
import { FC } from 'react';
import { CategoryData } from '@interfaces/CategoryData';

const Category: FC<CategoryData> = ({ image, name }) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <img className={styles.img} src={image} alt="" />
      <h5 className={styles.label}>{name}</h5>
    </div>
  );
};

export default Category;

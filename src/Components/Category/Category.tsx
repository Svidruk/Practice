import { useStyles } from './Category.styles';
import { FC } from 'react';

interface Props {
  label: string;
  image: string;
}

const Category: FC<Props> = ({ image, label }) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <img className={styles.img} src={image} alt="" />
      <h5 className={styles.label}>{label}</h5>
    </div>
  );
};

export default Category;

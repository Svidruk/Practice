import { useStyles } from './Category.styles';
import { FC, useCallback } from 'react';
import { CategoryData } from '@interfaces/CategoryData';
import { useDispatch, useSelector } from 'react-redux';
import { setSortInfo } from '@pages/Home/redux/actions';
import { RootState } from 'redux/store';
import classNames from 'classnames';

const Category: FC<CategoryData> = ({ image, name }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const sortInfo = useSelector((state: RootState) => state.homeReducer.sortInfo);

  const filterProducts = useCallback(() => {
    sortInfo.category === name
      ? dispatch(setSortInfo({ ...sortInfo, category: '' }))
      : dispatch(setSortInfo({ ...sortInfo, category: name }));
  }, [sortInfo, name]);

  return (
    <div className={styles.container} onClick={filterProducts}>
      <img className={styles.img} src={image} alt="" />
      <h5 className={classNames(styles.title, { [styles.currentCategory]: sortInfo.category === name })}>{name}</h5>
    </div>
  );
};

export default Category;

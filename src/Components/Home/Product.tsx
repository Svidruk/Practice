import React from 'react';
import { useStyles } from './Product.styles';

export const Product = () => {
  const styles = useStyles();
  return <div className={styles.container}></div>;
};

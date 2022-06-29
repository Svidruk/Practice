import { useStyles } from './Loader.styles';

const Loader = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;

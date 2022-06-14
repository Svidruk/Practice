import React, { FC, ReactNode } from 'react';
import { useStyles } from './Auth.styles';
import { ReactComponent as Close } from '@assets/icons/Close.svg';
import auth from '@assets/img/auth.png';

interface Props {
  children: ReactNode;
}

const Auth: FC<Props> = ({ children }) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.closeBtn}>
        <Close />
      </div>
      <img className={styles.img} src={auth} alt="auth" />
      <div className={styles.formContainer}>{children}</div>
    </div>
  );
};

export default Auth;

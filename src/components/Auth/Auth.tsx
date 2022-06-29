import React, { FC, ReactNode } from 'react';
import { useStyles } from './Auth.styles';
import { ReactComponent as Close } from '@assets/icons/Close.svg';
import auth from '@assets/img/auth.png';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Paths } from '@enums/Paths';

interface Props {
  children: ReactNode;
  isRegisterPage?: boolean;
}

const Auth: FC<Props> = ({ children, isRegisterPage }) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Link className={styles.closeBtn} to={Paths.root}>
        <Close />
      </Link>
      <img className={classNames(styles.img, { [styles.imgRegister]: isRegisterPage })} src={auth} alt="auth" />
      {children}
    </div>
  );
};

export default Auth;

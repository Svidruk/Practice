import Navbar from '@components/Navbar/Navbar';
import React, { ReactNode } from 'react';
import { useStyles } from './DefaultLayout.styles';

interface Props {
  children: ReactNode;
}

export const DefaultLayout: React.FC<Props> = ({ children }) => {
  const styles = useStyles();
  // const currentUser = { id: '1' } as User;

  return (
    <div className={styles.root}>
      <Navbar />
      <div className={styles.body}>{children}</div>
    </div>
  );
};

import { FC, ReactNode } from 'react';
import Skeleton from 'react-loading-skeleton';

interface Props {
  isLoading: boolean;
  element: ReactNode;
  className?: string;
}

const SkeletonBlock: FC<Props> = ({ isLoading, element, className }) => {
  return <>{isLoading ? <Skeleton className={className} count={1} /> : element}</>;
};

export default SkeletonBlock;

import { AsyncData } from '@interfaces/AsyncData';
import { ProductDescriptionData } from '@interfaces/ProductDescriptionData';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { getProductDescriptionData } from '../redux/actions';
import { useParams } from 'react-router-dom';

export const useProductDescription = (): {
  productDescriptionData: AsyncData<ProductDescriptionData>;
} => {
  const productDescriptionData = useSelector<RootState, AsyncData<ProductDescriptionData>>(
    (state) => state.productDescriptionReducer.productDescription
  );
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    if (!productDescriptionData.data && id) dispatch(getProductDescriptionData(+id));
  }, [id]);

  return { productDescriptionData };
};

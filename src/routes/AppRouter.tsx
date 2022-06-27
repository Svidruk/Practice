import { Paths } from '@enums/Paths';
import { Login } from '@pages/Login/Login';
import { Register } from '@pages/Register/Register';
import { Home } from '@pages/Home/Home';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductDescription } from '@pages/ProductDescription/ProductDescription';
import { useAuth } from '@hooks/useAuth';
import { DefaultLayout } from '@components/DefaultLayout';

const AppRouter: FC = () => {
  useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.login} element={<Login />}></Route>
        <Route path={Paths.register} element={<Register />}></Route>
        <Route path={Paths.root} element={<DefaultLayout children={<Home />} />}></Route>
        <Route path={`${Paths.product}/:id`} element={<DefaultLayout children={<ProductDescription />} />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

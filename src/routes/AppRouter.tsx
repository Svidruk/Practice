import { Paths } from '@enums/Paths';
import { Login } from '@pages/Login/Login';
import { Register } from '@pages/Register/Register';
import { Home } from '@pages/Home/Home';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '@pages/DefaultLayout';
import { ProductDescription } from '@pages/ProductDescription/ProductDescription';

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.login} element={<Login />}></Route>
        <Route path={Paths.register} element={<Register />}></Route>
        <Route path={Paths.root} element={<DefaultLayout children={<Home />} />}></Route>
        <Route path={Paths.product} element={<DefaultLayout children={<ProductDescription />} />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

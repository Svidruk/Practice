import { Paths } from '@enums/Paths';
import { Login } from '@pages/Login/Login';
import { Register } from '@pages/Register/Register';
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.login} element={<Login />}></Route>
        <Route path={Paths.register} element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

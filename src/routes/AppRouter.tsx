import { Paths } from '@enums/Paths';
import { Login } from '@pages/Login/Login';
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.login} element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

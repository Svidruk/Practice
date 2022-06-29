import React from 'react';
import 'normalize.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRouter from './routes/AppRouter';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App: React.FC = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;

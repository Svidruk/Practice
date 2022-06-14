import React from 'react';
import 'normalize.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRouter from './routes/AppRouter';

const App: React.FC = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;

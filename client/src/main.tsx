import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './app/page';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Home />
    </ReduxProvider>
  </React.StrictMode>,
);

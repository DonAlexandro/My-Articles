import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { Home } from './app/Home/view';
import { store } from './redux/store';
import { Box } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Box sx={{ '*': { boxSizing: 'border-box' } }}>
        <Home />
      </Box>
    </ReduxProvider>
  </React.StrictMode>,
);

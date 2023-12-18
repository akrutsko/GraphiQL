import { RouterProvider } from 'react-router-dom';

import SettingsContext from '../contexts/SettingsContext';
import { router } from '../router/router';
import StoreProvider from '../store/StoreProvider';

import './App.css';

const App = () => {
  return (
    <StoreProvider>
      <SettingsContext>
        <RouterProvider router={router} />
      </SettingsContext>
    </StoreProvider>
  );
};

export default App;

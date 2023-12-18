import { RouterProvider } from 'react-router-dom';

import { router } from '../router/router';
import './App.css';
import SettingsContext from '../contexts/SettingsContext';

const App = () => {
  return (
    <SettingsContext>
      <RouterProvider router={router} />
    </SettingsContext>
  );
};

export default App;

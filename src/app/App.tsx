import { RouterProvider } from 'react-router-dom';

import { router } from '../router/router.tsx';
import './App.css';
import SettingsContext from '../contexts/SettingsContext.tsx';

const App = () => {
  return (
    <SettingsContext>
      <RouterProvider router={router} />
    </SettingsContext>
  );
};

export default App;

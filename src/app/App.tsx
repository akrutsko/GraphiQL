import { RouterProvider } from 'react-router-dom';

import { router } from '../router/router.tsx';
import LanguageProvider from '../contexts/LanguageContext';
import './App.css';

const App = () => {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
};

export default App;

import Welcome from '../components/pages/Welcome';
import LanguageProvider from '../contexts/LanguageContext';

import './App.css';

const App = () => {
  return (
    <LanguageProvider>
      <Welcome />
    </LanguageProvider>
  );
};

export default App;

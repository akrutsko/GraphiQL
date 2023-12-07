import Welcome from '../components/pages/Welcome';
import LanguageProvider from '../contexts/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Welcome />
    </LanguageProvider>
  );
}

export default App;

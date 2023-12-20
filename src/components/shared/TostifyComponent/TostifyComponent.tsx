import { Slide, ToastContainer } from 'react-toastify';

import { useTheme } from '../../../hooks';

import 'react-toastify/dist/ReactToastify.css';
import './TostifyComponent.css';

const TostifyComponent = () => {
  const theme = useTheme();
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
      transition={Slide}
      toastStyle={{
        borderRadius: 0,
      }}
    />
  );
};

export default TostifyComponent;

import { Slide, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './TostifyComponent.css';
import { useTheme } from '../../../hooks';

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

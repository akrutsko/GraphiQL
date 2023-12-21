import { createBrowserRouter, Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

import { GraphiQL, PageNotFound, SignUp, SingIn, Welcome } from '../components/pages';
import Layout from '../components/widgets/Layout/Layout';
import { useAppSelector } from '../hooks';
import FallbackUI from '../components/shared/FallbackUI/FallbackUI.tsx';

type PrivateRouteProps = {
  element: ReactNode;
};

const PrivateMainRoute = ({ element }: PrivateRouteProps) => {
  const isAuthenticated = useAppSelector((state) => state.user);
  return isAuthenticated ? element : <Navigate to="/" />;
};

const PrivateSignRoute = ({ element }: PrivateRouteProps) => {
  const isAuthenticated = useAppSelector((state) => state.user);
  return !isAuthenticated ? element : <Navigate to="/main" />;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <FallbackUI />,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/sign-in',
        element: <PrivateSignRoute element={<SingIn />} />,
      },
      {
        path: '/sign-up',
        element: <PrivateSignRoute element={<SignUp />} />,
      },
      {
        path: '/main',
        element: <PrivateMainRoute element={<GraphiQL />} />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

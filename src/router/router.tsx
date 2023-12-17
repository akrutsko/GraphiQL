import { createBrowserRouter } from 'react-router-dom';

import { GraphiQL, PageNotFound, SignUp, SingIn, Welcome } from '../components/pages';
import Layout from '../components/widgets/Layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: ,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/sign-in',
        element: <SingIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/graphi-ql',
        element: <GraphiQL />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

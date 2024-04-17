/* eslint-disable react-refresh/only-export-components */
// Base
import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Components
import App from './App';
import Loading from './components/Loading/Loading';

// Pages
const Banner = lazy(() => import('./components/pages/Banner/Banner'));
const Product = lazy(() => import('./components/pages/Product/Product'));
const Customers = lazy(() => import('./components/pages/Customers/Customers'));
const Pricing = lazy(() => import('./components/pages/Pricing/Pricing'));
const Resources = lazy(() => import('./components/pages/Resources/Resources'));
const Error = lazy(() => import('./components/pages/Error/Error'));

// Element
// eslint-disable-next-line react/prop-types
const Element = ({ component }) => {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
};

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Element component={<Banner />} />,
      },
      {
        path: '/product',
        element: <Element component={<Product />} />,
      },
      {
        path: '/customers',
        element: <Element component={<Customers />} />,
      },
      {
        path: '/pricing',
        element: <Element component={<Pricing />} />,
      },
      {
        path: '/resources',
        element: <Element component={<Resources />} />,
      },
      {
        path: '*',
        element: <Element component={<Error />} />,
      },
    ],
  },
]);

export default routes;

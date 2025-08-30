import Cart from '@/components/Cart';
import Dashboard from '@/components/Dashboard';
import NexStore from '@/components/NexStore';
import PaymentHistory from '@/components/PaymentHistory';
import Search from '@/components/search/Search';
import Shipping from '@/components/Shipping';
import DocumentationPage from '@/pages/Documentation';
import Home from '@/pages/Home';
import Landing from '@/pages/Landing';
import Login from '@/pages/Login';
import SubscriptionPage from '@/pages/Pricing';
import ProductsView from '@/pages/ProductsView';
import Profile from '@/pages/Profile';
import SignIn from '@/pages/SignIn';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/documentation',
    element: <DocumentationPage />,
  },
  {
    path: '/subscriptions',
    element: <SubscriptionPage />,
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'shipping',
        element: <Shipping />,
      },

      {
        path: 'payment_history',
        element: <PaymentHistory />,
      },
      {
        path: 'nex_store',
        element: <NexStore />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'products_view',
        element: <ProductsView />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

export default router;

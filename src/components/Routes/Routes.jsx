import { createBrowserRouter } from 'react-router-dom';
import Main from '../Header/Layout/Main';
import Home from '../../pages/Home';
import Product from '../../pages/Product';
import ProductDetails from '../../pages/ProductDetails';
import WishlistPage from '../../pages/WishlistPage';
import CartPage from '../../pages/CartPage';
import CheckOut from '../../pages/CheckOut';
import About from '../About/About';
import Contact from '../Contract/Contact';
import SignUp from '../../pages/SignUp';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: 'product', element: <Product /> },
      { path: 'product/:id', element: <ProductDetails /> },
      { path: 'wishlist', element: <WishlistPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckOut /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'login', element: <Login /> },
      {path: '*', element: <NotFound /> }
    ],
  },
]);

export default router;

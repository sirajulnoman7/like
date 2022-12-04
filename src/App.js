
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './layout/Main';
import Shop from './components/shop/Shop'
import Order from './components/Order/Order';
import { productsAndCartLoader } from './ProductsAndCartLoader/productsAndCartLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Inventory from './components/Inventory/Inventory';


function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: async () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/home',
          loader: async () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          loader: async () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'order',
          loader: productsAndCartLoader,
          element: <Order></Order>
        },
        {
          path: 'shipping',
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path: '/login',

          element: <Login></Login>
        },
        {
          path: '/inventory',

          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: '/sign-up',

          element: <SignUp></SignUp>
        },
      ]

    },
    {
      path: '*', element: <div>this page is not found 404</div>
    }
  ])
  return (
    <div >

      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

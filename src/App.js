
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './layout/Main';
import Shop from './components/shop/Shop'
import Order from './components/Order/Order';
import { productsAndCartLoader } from './ProductsAndCartLoader/productsAndCartLoader';


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

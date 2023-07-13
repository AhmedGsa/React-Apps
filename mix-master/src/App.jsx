import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {About, Home, Cocktail, Landing, Newsletter, Error} from './pages';
import {loader as landingLoader} from './pages/Landing'
import SinglePageError from './pages/SinglePageError';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <SinglePageError />,
        element: <Landing />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/cocktail/:id",
        element: <Cocktail />
      },
      {
        path: "/newsletter",
        element: <Newsletter />
      },
    ]
  },
])

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {About, Home, Cocktail, Landing, Newsletter, Error} from './pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/cocktail",
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

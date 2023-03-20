import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from 'components/';
import { Home, Profile } from 'pages/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/profile', element: <Profile /> },
    ],
  },
]);

function AppRoutes(): React.ReactElement {
  return <RouterProvider router={router} />;
}

export default AppRoutes;

import { useRoutes } from 'react-router-dom';
import HomePage from '@/views/pages/HomePage';
import pages from './pages';

const Routes = () => {
  let routes = useRoutes([
    { 
      path: "/",
      element: <HomePage />,
    },
    ...pages,
  ])

  return routes;
}

export default Routes
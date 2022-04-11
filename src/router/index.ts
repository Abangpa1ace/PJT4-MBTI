import { useRoutes } from 'react-router-dom';
import HomePage from '@/views/pages/HomePage';

function Router() {
  let routes = useRoutes([
    { 
      path: '/',
      element: HomePage,
    },
  ])

  return routes;
}

export default Router
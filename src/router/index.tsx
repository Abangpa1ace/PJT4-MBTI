import styled from 'styled-components';
import { container } from '@/styles';
import { useRoutes } from 'react-router-dom';
import RouterTitle from 'react-router-title';
import HomePage from '@/views/pages/HomePage';
import pages from './pages';
import NotFoundPage from '@/views/layouts/NotFoundPage';

const routes = [
  { 
    path: "/",
    title: "지금 우리 mbti는",
    element: <HomePage />,
  },
  ...pages,
  {
    path: '*',
    title: '잘못된 접근입니다!',
    element: <NotFoundPage />,
  },
]

const Router = () => {
  let router = useRoutes(routes)

  return (
    <ScRouter className="router">
      <RouterTitle routesConfig={routes} />
      {router}
    </ScRouter>
  )
}

const ScRouter = styled.div`
  > div > section {
    ${container}
  }
`

export default Router
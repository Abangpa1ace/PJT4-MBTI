import TestPage from "@/views/pages/TestPage"
import MidResultPage from "@/views/pages/MidResultPage"
import FinalResultPage from "@/views/pages/FinalResultPage"
import NotFoundPage from '@/views/layouts/NotFoundPage';

export default [
  {
    path: '/test',
    title: 'MBTI를 테스트 중입니다!',
    name: 'TestPage',
    element: <TestPage />,
  },
  {
    path: '/result/mid',
    title: '예전의 나, 친구들 사이의 나는 이런 사람?',
    element: <MidResultPage />,
  },
  {
    path: '/result/final',
    title: '과연 내 성격은 어떻게 바뀐걸까?',
    element: <FinalResultPage />
  },
]
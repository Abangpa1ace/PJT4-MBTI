import TestPage from "@/views/pages/TestPage"
import MidResultPage from "@/views/pages/MidResultPage"
import FinalResultPage from "@/views/pages/FinalResultPage"

export default [
  {
    path: '/test',
    element: <TestPage />,
  },
  {
    path: '/result/mid',
    element: <MidResultPage />,
  },
  {
    path: '/result/final',
    element: <FinalResultPage />
  }
]
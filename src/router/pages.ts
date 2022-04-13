const view = (path: string) => () => import(`../views/pages/${path}.tsx`);

export default [
  {
    path: '/test',
    element: view('TestPage'),
  },
  {
    path: '/result/mid',
    element: view('MidResultPage'),
  },
  {
    path: '/result/final',
    element: view('FinalResultPage')
  }
]
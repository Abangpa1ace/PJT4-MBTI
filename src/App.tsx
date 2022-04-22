import Router from '@/router';
import { useCallback, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { atomDeviceSize } from './recoil/main';

const App = () => {
  const setDeviceSize = useSetRecoilState(atomDeviceSize);
  const onResize = useCallback(() => {
    const width = window.innerWidth;
    const size = width > 1024 ? 'd' : width > 768 ? 't' : 'm'
    setDeviceSize(size);
  }, [])

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize)
  }, [])

  return (
    <div id="app">
      <Router />
    </div>
  )
}

export default App
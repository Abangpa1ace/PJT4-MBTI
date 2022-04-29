import Router from '@/router';
import { useMemo, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { atomDeviceSize } from './recoil/main';
import { debounce } from 'lodash';

const App = () => {
  const setDeviceSize = useSetRecoilState(atomDeviceSize);
  const onResize = useMemo(
    () => debounce(() => {
      const width = window.innerWidth;
      const size = width > 1024 ? 'd' : width > 768 ? 't' : 'm'
      setDeviceSize(size);
    }, 100
  ), [])

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div id="app">
      <Router />
    </div>
  )
}

export default App
import Router from '@/router';
import { useMemo, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { atomDeviceSize, atomToast } from './recoil/main';
import { debounce } from 'lodash';
import ToastPortal from './views/layouts/ToastPortal';

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
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) kakao.init(import.meta.env.VITE_KAKAO_API_KEY)
    }
    onResize();
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const toastList = useRecoilValue(atomToast);

  return (
    <div id="app">
      <Router />
      <ToastPortal />
    </div>
  )
}

export default App
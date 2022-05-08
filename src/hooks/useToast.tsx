import { atomToast } from '@/recoil/main';
import ToastPortal from '@/views/layouts/ToastPortal';
import { Children, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { useRecoilState } from 'recoil';

interface useToastReturn {
  toast: (message: string) => void;
}

const root = document.getElementById('toast')

const useToast = (): useToastReturn => {
  const [toastList, setToastList] = useRecoilState(atomToast);
  
  const toast = (msg) => {
    setToastList([...toastList, msg])
    setTimeout(() => {
      setToastList(toastList.slice(1))
    }, 1000)
  }
  return { toast }
}

export default useToast
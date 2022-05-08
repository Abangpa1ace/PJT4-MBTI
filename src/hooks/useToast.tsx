import { atomToast } from '@/recoil/main';
import { useRecoilState } from 'recoil';

interface useToastReturn {
  toast: (message: string, error?: boolean) => void;
}

const useToast = (): useToastReturn => {
  const [toastList, setToastList] = useRecoilState(atomToast);
  
  const addToast = ({ message = '', error = false }) => {
    if (!!toastList.find(t => t.message === message)) return;
    setToastList([...toastList, { message, error, time: +new Date() }])
  }

  const clearToast = (message: string) => {
    const list = [...toastList];
    list.splice(list.findIndex(t => t.message === message), 1)
    setToastList(list);
  }

  const toast = (message = '', error = false) => {
    addToast({ message, error })
    setTimeout(() => {
      clearToast(message);
    }, 2000)
  }
  return { toast }
}

export default useToast
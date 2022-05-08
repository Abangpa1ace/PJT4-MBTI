import { setMBTI } from '@/utils/data';
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist'; 

const storageAtom = (isPersist = true) => {
  const { persistAtom } = recoilPersist({
    storage: isPersist ? localStorage : sessionStorage,
  })

  return persistAtom
}

export const atomResultA = atom<TestSubmitList>({
  key: 'resultA',
  default: [],
  effects_UNSTABLE: [storageAtom(false)],
})

export const resultCodeA = selector<TestCodes>({
  key: 'resultCodeA',
  get: ({get}) => {
    const list = get(atomResultA)
    return setMBTI(list)
  }
})

export const atomResultB = atom<TestSubmitList>({
  key: 'resultB',
  default: [],
  effects_UNSTABLE: [storageAtom(false)],
})

export const resultCodeB = selector<TestCodes>({
  key: 'resultCodeB',
  get: ({get}) => {
    const list = get(atomResultB)
    return setMBTI(list)
  }
})

export const atomDeviceSize = atom<DeviceSizeType>({
  key: 'deviceSize',
  default: 'm',
})

export const atomToast = atom<{ message: string, error: boolean, time: number }[]>({
  key: 'toastList',
  default: [],
})
import { setMBTI } from '@/utils/data';
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist'; 

const { persistAtom } = recoilPersist({
  storage: sessionStorage,
})

export const atomResultA = atom<TestResultList>({
  key: 'resultA',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export const resultCodeA = selector<string>({
  key: 'resultCodeA',
  get: ({get}) => {
    const list = get(atomResultA)
    return setMBTI(list)
  }
})

export const atomResultB = atom<TestResultList>({
  key: 'resultB',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export const resultCodeB = selector<string>({
  key: 'resultCodeB',
  get: ({get}) => {
    const list = get(atomResultB)
    return setMBTI(list)
  }
})
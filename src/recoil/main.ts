import { setMBTI } from '@/utils/data';
import { atomEffect } from '@/utils/storage';
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist'; 

const { persistAtom } = recoilPersist({
  storage: sessionStorage,
})

export const resultA = atom<TestResultList>({
  key: 'resultA',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export const resultCodeA = selector<string>({
  key: 'resultCodeA',
  get: ({get}) => {
    const list = get(resultA)
    return setMBTI(list)
  }
})

export const resultB = atom<TestResultList>({
  key: 'resultB',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export const resultCodeB = selector<string>({
  key: 'resultCodeB',
  get: ({get}) => {
    const list = get(resultA)
    return setMBTI(list)
  }
})
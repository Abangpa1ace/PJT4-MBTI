import { setMBTI } from '@/utils';
import { atom, selector } from 'recoil';

export const resultA = atom<TestResultList>({
  key: 'resultA',
  default: [],
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
})

export const resultCodeB = selector<string>({
  key: 'resultCodeB',
  get: ({get}) => {
    const list = get(resultA)
    return setMBTI(list)
  }
})
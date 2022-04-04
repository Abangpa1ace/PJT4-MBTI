import { setMBTI } from '@/utils/data';
import { atomEffect, getStorage } from '@/utils/storage';
import { atom, selector } from 'recoil';

export const resultA = atom<TestResultList>({
  key: 'resultA',
  default: [],
  effects: [atomEffect('resultA', false)],
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
  effects: [atomEffect('resultB', false)],
})

export const resultCodeB = selector<string>({
  key: 'resultCodeB',
  get: ({get}) => {
    const list = get(resultA)
    return setMBTI(list)
  }
})
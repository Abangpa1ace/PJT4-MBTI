import { css } from 'styled-components';
import customStyles from './asset';
import { strSplit } from '@/utils/common';

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  max-width: 550px;
  height: 100%;
  margin: 0 auto;
  padding: 50px;
  overflow: hidden;
  
  @media (max-width: 550px) {
    gap: 20px;
    width: 100%;
    padding: 30px 20px;
  }
`;

const s = (styleContext: string) => {
  const styles = strSplit(styleContext, ';').reduce((acc, style) => {
    const s = style.indexOf('(')
    const e = style.lastIndexOf(')')
    let k = s === -1 ? style : style.slice(0,s)
    let v = s === -1 ? null : style.slice(s+1,e)
    // let [k,v] = style.split(/[()]/)
    const vs = v?.includes('rgb') ? [v] : !!v ? strSplit(v, ',').map(v => +v !== 0 && Number.isInteger(+v) ? `${v}px` : v) : '';
    return acc + customStyles[k](...vs)
  }, '')

  return `{ ${css`${styles}`} }`
}

export default s;
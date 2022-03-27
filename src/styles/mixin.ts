import { css } from 'styled-components';
import customStyles from './asset';
import { strSplit } from '@/utils';

export const container = css`
  max-width: 580px;
  height: 100%;
  margin: 0 auto;
  padding: 50px;
  overflow: hidden;
  
  @media (max-width: 580px) {
    width: 100%;
    padding: 50px 15px;
  }
`;

const s = (styleContext: string) => {
  const styles = strSplit(styleContext, ';').reduce((acc, style) => {
    let [k,v] = style.split(/[()]/)
    const vs = v ? strSplit(v, ',').map(v => Number.isInteger(+v) ? `${v}px` : v) : '';
    return acc + customStyles[k](...vs)
  }, '')

  return `{ ${css`${styles}`} }`
}

export default s;
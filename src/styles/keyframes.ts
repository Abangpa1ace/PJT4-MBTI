import { keyframes } from 'styled-components'

export const extendWidth = (length: number) => keyframes`
  from {
    width: 0;
  }
}
  to {
    width: ${length}
`

export const slideLeft = keyframes`
  from {
    transform: translateX(100%) scale(.5);
    opacity: 0;
  }
  to {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
`
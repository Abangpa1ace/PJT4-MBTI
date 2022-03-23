import { css } from 'styled-components';

export const container = css`
  max-width: 580px;
  height: 100%;
  margin: 0 auto;
  padding: 50px;
  overflow: hidden;

  * > {
    width: 100%;
  }
  
  @media (max-width: 580px) {
    width: 100%;
    padding: 50px 15px;
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const flexAlign = css`
  display: flex;
  align-items: center;
`;

export const flexColumn = css`
  ${flexCenter};
  flex-direction: column;
`;

export const ellipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
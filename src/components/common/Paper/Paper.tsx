import { FC } from 'react';
import { css } from '@emotion/react';

const Paper: FC = ({ children }) => {
  return <div css={paper}>{children}</div>;
};

const paper = css`
  height: inherit;
  padding: 24px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 20%) 0 2px 1px -1px, rgb(0 0 0 / 14%) 0 1px 1px 0,
    rgb(0 0 0 / 12%) 0 1px 3px 0;
`;

export default Paper;

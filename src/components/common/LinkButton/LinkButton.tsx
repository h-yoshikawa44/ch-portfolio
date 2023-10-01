import { FC, ComponentPropsWithRef } from 'react';
import { darken, rgba } from 'polished';
import { css } from '@emotion/react';
import { colors, colorRatios } from '@/styles/constants';
import { montserrat } from '@/styles/fonts';

type Props = ComponentPropsWithRef<'a'> & {
  variants?: 'contained' | 'outlined';
};

const LinkButton: FC<Props> = ({
  variants = 'contained',
  children,
  ...props
}) => {
  return (
    <a
      css={[
        linkButton,
        variants === 'contained' && linkButtonContained,
        variants === 'outlined' && linkButtonOutlined,
      ]}
      {...props}
    >
      {children}
    </a>
  );
};

const linkButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  font-family: ${montserrat.style.fontFamily};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  border-radius: 12px;
  transition: background-color 0.3s;
`;

const linkButtonContained = css`
  color: ${colors.white};
  background-color: ${colors.blue};

  &:hover {
    background-color: ${darken(colorRatios.buttonDarken, colors.blue)};
  }
`;

const linkButtonOutlined = css`
  color: ${colors.blue};
  background-color: ${colors.white};
  border: 1px solid ${colors.blue};

  &:hover {
    background-color: ${rgba(colors.black, colorRatios.buttonAlpha)};
  }
`;

export default LinkButton;

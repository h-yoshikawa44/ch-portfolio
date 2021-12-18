import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { fonts, colors } from '@/styles/constants';
import { createRGBAColor, createDarkenColor } from '@/lib/csx';

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
  padding: 12px 40px;
  font-family: ${fonts.montserrat};
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
    /* stylelint-disable-next-line function-name-case */
    background-color: ${createDarkenColor(colors.blue, 0.2)};
  }
`;

const linkButtonOutlined = css`
  color: ${colors.blue};
  background-color: ${colors.white};
  border: 1px solid ${colors.blue};

  &:hover {
    /* stylelint-disable-next-line function-name-case */
    background-color: ${createRGBAColor(colors.black, 0.1)};
  }
`;

export default LinkButton;

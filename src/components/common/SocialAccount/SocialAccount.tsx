import { VFC, Fragment } from 'react';
import { css } from '@emotion/react';
import { Github } from '@emotion-icons/fa-brands/Github';
import { Twitter } from '@emotion-icons/fa-brands/Twitter';

type Props = {
  type: 'github' | 'twitter';
  iconSize: number;
  accountID: string;
};

const SocialAccount: VFC<Props> = ({ type, iconSize, accountID }) => {
  return (
    <Fragment>
      {type === 'github' && (
        <a href={`https://github.com/${accountID}`}>
          <Github size={iconSize} />
          <span css={socialAccountId}>{accountID}</span>
        </a>
      )}
      {type === 'twitter' && (
        <a href={`https://twitter.com/${accountID}`}>
          <Twitter size={iconSize} />
          <span css={socialAccountId}>{`@${accountID}`}</span>
        </a>
      )}
    </Fragment>
  );
};

const socialAccountId = css`
  display: inline-block;
  margin-left: 8px;
`;

export default SocialAccount;

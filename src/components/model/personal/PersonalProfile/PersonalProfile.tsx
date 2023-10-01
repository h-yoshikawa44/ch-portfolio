import { FC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { Profile, SocialAccount as SocialAccountType } from '@/models/Personal';
import Paper from '@/components/common/Paper';
import SocialAccount from '@/components/common/SocialAccount';
import { breakPoint, fonts, colors } from '@/styles/constants';

type Props = {
  profile: Profile;
  socialAccounts: SocialAccountType[];
};

const PersonalProfile: FC<Props> = ({ profile, socialAccounts }) => {
  return (
    <section>
      <Paper>
        <div css={profileCardLayout}>
          <p css={profileImgBlock}>
            <Image css={profileImg} src={profile.icon} alt="My Icon" fill />
          </p>
          <div css={profileTextBlock}>
            <div css={profileHeader}>
              <div>
                <h2 css={profileName}>{profile.name}</h2>
                <small css={profileRole}>{profile.role}</small>
              </div>
              <ul css={profileAccountList}>
                {socialAccounts.map((account) => (
                  <li key={account.type} css={profileAccount}>
                    <SocialAccount
                      type={account.type}
                      iconSize={24}
                      accountID={account.accountId}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <p css={profileDescription}>{profile.description}</p>
          </div>
        </div>
      </Paper>
    </section>
  );
};

const profileCardLayout = css`
  display: flex;

  @media (width < ${breakPoint.md}px) {
    flex-direction: column;
  }
`;

const profileImgBlock = css`
  position: relative;
  flex-shrink: 0;
  width: 240px;
  height: 240px;
  border: 1px solid #5c93bb2b;
  border-radius: 16px;

  @media (width < ${breakPoint.md}px) {
    width: 100%;
  }
`;

const profileImg = css`
  object-fit: contain;
`;

const profileTextBlock = css`
  width: 100%;
  margin-left: 24px;

  @media (width < ${breakPoint.md}px) {
    margin-left: 0;
  }
`;

const profileHeader = css`
  display: flex;
  justify-content: space-between;

  @media (width < ${breakPoint.md}px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const profileName = css`
  font-family: ${fonts.montserrat};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px;
  color: ${colors.gray2};
`;

const profileRole = css`
  font-family: ${fonts.montserrat};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: ${colors.gray3};
`;

const profileAccountList = css`
  padding-left: 0;
  margin: 0;
  list-style: none;

  @media (width < ${breakPoint.md}px) {
    margin-top: 16px;
  }
`;

const profileAccount = css`
  margin-bottom: 4px;
  font-family: ${fonts.montserrat};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: ${colors.gray2};

  &:last-child {
    margin-bottom: 0;
  }
`;

const profileDescription = css`
  margin-top: 32px;
  font-family: ${fonts.montserrat};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: ${colors.gray3};

  @media (width < ${breakPoint.md}px) {
    margin-top: 20px;
  }
`;

export default PersonalProfile;

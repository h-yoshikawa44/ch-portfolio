import { VFC } from 'react';
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

const PersonalProfile: VFC<Props> = ({ profile, socialAccounts }) => {
  return (
    <section>
      <Paper>
        <div css={profileCardLayout}>
          <p css={profileImgBlock}>
            <Image
              src={profile.icon}
              alt="My Icon"
              layout="fill"
              objectFit="contain"
            />
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

  @media (max-width: ${breakPoint.md - 1}px) {
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

  @media (max-width: ${breakPoint.md - 1}px) {
    width: 100%;
  }
`;

const profileTextBlock = css`
  width: 100%;
  margin-left: 24px;

  @media (max-width: ${breakPoint.md - 1}px) {
    margin-left: 0;
  }
`;

const profileHeader = css`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakPoint.md - 1}px) {
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

  @media (max-width: ${breakPoint.md - 1}px) {
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

  @media (max-width: ${breakPoint.md - 1}px) {
    margin-top: 20px;
  }
`;

export default PersonalProfile;

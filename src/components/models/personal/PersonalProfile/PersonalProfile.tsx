import { VFC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { Github } from '@emotion-icons/fa-brands/Github';
import { Twitter } from '@emotion-icons/fa-brands/Twitter';
import { breakPoint, fonts, colors } from '@/styles/constants';

const PersonalProfile: VFC = () => {
  return (
    <section css={profileCard}>
      <p css={profileImgBlock}>
        <Image
          src="/personal/my-icon.png"
          alt="My Icon"
          layout="fill"
          objectFit="contain"
        ></Image>
      </p>
      <div css={profileTextBlock}>
        <div css={profileHeader}>
          <div>
            <h2 css={profileName}>Hitomi Yoshikawa</h2>
            <small css={profileRole}>Web Developer</small>
          </div>
          <ul css={profileAccountList}>
            <li css={[profileAccount, profileAccountMargin]}>
              <Github size={24} />
              <span css={profileAccountId}>@h-yoshilawa44</span>
            </li>
            <li css={profileAccount}>
              <Twitter size={24} />
              <span css={profileAccountId}>@yoshi44_lion</span>
            </li>
          </ul>
        </div>
        <p css={profileDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          sapiente earum totam explicabo saepe perferendis ipsa nulla
          asperiores, rem hic in obcaecati exercitationem nisi molestias magnam
          ratione tempora unde assumenda.
        </p>
      </div>
    </section>
  );
};

const profileCard = css`
  display: flex;
  padding: 24px;
  background-color: #fff;
  border-radius: 12px;

  @media (max-width: ${breakPoint.sm - 1}px) {
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

  @media (max-width: ${breakPoint.sm - 1}px) {
    width: 100%;
  }
`;

const profileTextBlock = css`
  margin-left: 24px;
`;

const profileHeader = css`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakPoint.sm - 1}px) {
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

  @media (max-width: ${breakPoint.sm - 1}px) {
    margin-top: 16px;
  }
`;

const profileAccount = css`
  font-family: ${fonts.montserrat};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: ${colors.gray2};
`;

const profileAccountMargin = css`
  margin-bottom: 4px;
`;

const profileAccountId = css`
  display: inline-block;
  margin-left: 8px;
`;

const profileDescription = css`
  margin-top: 32px;
  font-family: ${fonts.montserrat};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: ${colors.gray3};

  @media (max-width: ${breakPoint.sm - 1}px) {
    margin-top: 20px;
  }
`;

export default PersonalProfile;

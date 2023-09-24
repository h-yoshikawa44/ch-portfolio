import { FC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { Hobby } from '@/models/Personal';
import Paper from '@/components/common/Paper';
import { fonts, colors } from '@/styles/constants';

type Props = {
  hobbies: Hobby[];
};

const PersonalHobby: FC<Props> = ({ hobbies }) => {
  return (
    <section>
      <Paper>
        <h2 css={hobbySectionTitle}>Hobbies</h2>
        <div css={hobbyList}>
          <div css={hobbyListLayout}>
            {hobbies.map((hobby) => (
              <div key={hobby.title}>
                <p css={hobbyListItemImgBlock}>
                  <Image
                    src={hobby.img}
                    alt={hobby.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </p>
                <h4 css={hobbyListItemTitle}>{hobby.title}</h4>
                <p css={hobbyListItemDescription}>{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Paper>
    </section>
  );
};

const hobbySectionTitle = css`
  font-family: ${fonts.montserrat};
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  color: ${colors.gray2};
`;

const hobbyList = css`
  margin-top: 24px;
`;

const hobbyListLayout = css`
  display: grid;
  gap: 24px;
`;

const hobbyListItemImgBlock = css`
  position: relative;
  width: 100%;
  height: 200px;
  border: 1px solid #5c93bb2b;
  border-radius: 16px;
`;

const hobbyListItemTitle = css`
  margin-top: 24px;
  font-family: ${fonts.montserrat};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  color: ${colors.black};
`;

const hobbyListItemDescription = css`
  margin-top: 8px;
  font-family: ${fonts.montserrat};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: ${colors.gray3};
`;

export default PersonalHobby;

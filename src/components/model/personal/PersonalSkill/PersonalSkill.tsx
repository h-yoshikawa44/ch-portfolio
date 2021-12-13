import { VFC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import Paper from '@/components/common/Paper';
import { Skill } from '@/models/Personal';
import { fonts, colors } from '@/styles/constants';

type Props = {
  skills: Skill[];
};

const PersonalSkill: VFC<Props> = ({ skills }) => {
  return (
    <section>
      <Paper>
        <h2 css={skillTitle}>Skill</h2>
        <ul css={skillList}>
          {skills.map((skill) => (
            <li key={skill.skillName} css={skillListItem}>
              <Image
                src={skill.icon}
                alt={skill.skillName}
                width={20}
                height={20}
              />
              <span css={skillListItemName}>{skill.skillName}</span>
            </li>
          ))}
        </ul>
      </Paper>
    </section>
  );
};

const skillTitle = css`
  font-family: ${fonts.montserrat};
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  color: ${colors.gray2};
`;

const skillList = css`
  padding: 0;
  list-style: none;
`;

const skillListItem = css`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const skillListItemName = css`
  margin-left: 8px;
  font-family: ${fonts.montserrat};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: ${colors.gray2};
`;

export default PersonalSkill;

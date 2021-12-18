import { VFC } from 'react';
import { css } from '@emotion/react';
import Paper from '@/components/common/Paper';
import { fonts, colors } from '@/styles/constants';

type Props = {
  count: number;
  tags: string[];
};

const ProjectHeader: VFC<Props> = ({ count, tags }) => {
  return (
    <header>
      <Paper>
        <h2 css={projectHeaderTitle}>{`Projects(${count})`}</h2>
        <div css={projectTagBlock}>
          {tags &&
            tags.map((tag) => (
              <button key={tag} css={projectTagButton}>
                {tag}
              </button>
            ))}
        </div>
      </Paper>
    </header>
  );
};

const projectHeaderTitle = css`
  font-family: ${fonts.montserrat};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: ${colors.gray2};
`;

const projectTagBlock = css`
  display: flex;
  margin-top: 16px;
`;

const projectTagButtonActive = css`
  color: ${colors.white};
  background-color: ${colors.blue};
  border: 1px solid ${colors.blue};
`;

const projectTagButton = css`
  padding: 8px 24px;
  margin-right: 16px;
  font-family: ${fonts.montserrat};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  color: ${colors.gray2};
  background-color: ${colors.white};
  border: 1px solid ${colors.gray2};
  border-radius: 12px;
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  &:hover,
  &:focus {
    ${projectTagButtonActive}
  }

  &:not(.focus-visible) {
    outline-color: transparent;
  }
`;

export default ProjectHeader;

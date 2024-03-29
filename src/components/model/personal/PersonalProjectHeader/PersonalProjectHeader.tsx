import { FC } from 'react';
import { css } from '@emotion/react';
import { rgba } from 'polished';
import Paper from '@/components/common/Paper';
import { breakPoint, colors, colorRatios } from '@/styles/constants';
import { montserrat } from '@/styles/fonts';

type Props = {
  count: number;
  tags: string[];
  filter: string;
  onFilter: (tag: string) => void;
};

const ProjectHeader: FC<Props> = ({ count, tags, filter, onFilter }) => {
  return (
    <header>
      <Paper>
        <h2 css={projectHeaderTitle}>{`Projects(${count})`}</h2>
        <div css={projectTagBlock}>
          {tags &&
            tags.map((tag) => (
              <button
                key={tag}
                css={[
                  projectTagButton,
                  filter === tag && projectTagButtonActive,
                ]}
                onClick={() => onFilter(tag)}
              >
                {tag}
              </button>
            ))}
        </div>
      </Paper>
    </header>
  );
};

const projectHeaderTitle = css`
  font-family: ${montserrat.style.fontFamily};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: ${colors.gray2};
`;

const projectTagBlock = css`
  display: flex;
  flex-wrap: wrap;
  margin: calc(-16px + 16px) 0 0 -16px;

  @media (width < ${breakPoint.md}px) {
    margin: calc(-8px + 16px) 0 0 -8px;
  }
`;

const projectTagButtonActive = css`
  color: ${colors.white};
  background-color: ${colors.blue};
  border: 1px solid ${colors.blue};

  &:hover,
  &:focus {
    background-color: ${colors.blue};
  }
`;

const projectTagButton = css`
  padding: 8px 24px;
  margin-top: 16px;
  margin-left: 16px;
  font-family: ${montserrat.style.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  color: ${colors.gray2};
  background-color: ${colors.white};
  border: 1px solid ${colors.gray2};
  border-radius: 12px;
  transition:
    background-color 0.3s,
    color 0.3s,
    border 0.3s;

  &:hover,
  &:focus {
    background-color: ${rgba(colors.black, colorRatios.buttonAlpha)};
  }

  &:not(:focus-visible) {
    outline-color: transparent;
  }

  @media (width < ${breakPoint.md}px) {
    margin-top: 8px;
    margin-left: 8px;
  }
`;

export default ProjectHeader;

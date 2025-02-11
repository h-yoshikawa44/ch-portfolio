import { FC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { Project } from '@/models/Personal';
import Paper from '@/components/common/Paper';
import LinkButton from '@/components/common/LinkButton';
import { colors } from '@/styles/constants';
import { montserrat } from '@/styles/fonts';

type Props = {
  project: Project;
};

const PersonalProject: FC<Props> = ({ project }) => {
  return (
    <Paper>
      <div css={projectLayout}>
        <p css={projectImgBlock}>
          <Image css={projectImg} src={project.img} alt={project.name} fill />
        </p>
        <ul css={projectTagList}>
          {project.tags.map((tag) => (
            <li
              key={`${project.name}-${tag}`}
              css={projectTagListItem}
            >{`#${tag}`}</li>
          ))}
        </ul>
        <h4 css={projectName}>{project.name}</h4>
        <p css={projectDescription}>{project.description}</p>
        <div css={projectLinkBlock}>
          <LinkButton href={project.demoUrl}>Demo</LinkButton>
          <LinkButton variants="outlined" href={project.repoUrl}>
            Code
          </LinkButton>
        </div>
      </div>
    </Paper>
  );
};

const projectLayout = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const projectImgBlock = css`
  position: relative;
  width: 100%;
  height: 216px;
`;

const projectImg = css`
  object-fit: contain;
  border-radius: 12px;
`;

const projectTagList = css`
  display: flex;
  padding: 0;
  margin-top: 24px;
  list-style: none;
`;

const projectTagListItem = css`
  margin-right: 8px;
  font-family: ${montserrat.style.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: ${colors.gray2};

  &:last-child {
    margin-right: 0;
  }
`;

const projectName = css`
  font-family: ${montserrat.style.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  color: ${colors.black};
`;

const projectDescription = css`
  margin-top: 16px;
  font-family: ${montserrat.style.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: ${colors.gray3};
`;

const projectLinkBlock = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 100%));
  gap: 4%;
  margin-top: auto;
`;

export default PersonalProject;

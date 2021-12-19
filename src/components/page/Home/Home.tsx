import { VFC } from 'react';
import { css } from '@emotion/react';
import { Blog } from '@/models/Blog';
import PersonalProfile from '@/components/model/personal/PersonalProfile';
import PersonalSkill from '@/components/model/personal/PersonalSkill';
import PersonalHobby from '@/components/model/personal/PersonalHobby';
import BlogNewPost from '@/components/model/blog/BlogNewPost';
import ProjectHeader from '@/components/model/personal/PersonalProjectHeader';
import PersonalProject from '@/components/model/personal/PersonalProject';
import Footer from '@/components/common/Footer';
import { personal } from '@/data/personal';
import { colors } from '@/styles/constants';

type Props = {
  blog: Blog;
};

const Home: VFC<Props> = ({ blog }) => {
  return (
    <div>
      <main css={main}>
        <div css={container}>
          <PersonalProfile
            profile={{
              name: personal.name,
              role: personal.role,
              icon: personal.icon,
              description: personal.description,
            }}
            socialAccounts={personal.socialAccounts}
          />
          <div css={[sectionMarginTop, centerSectionLayout]}>
            <div css={centerSectionLeftBlockLayout}>
              <PersonalSkill skills={personal.skills} />
              <PersonalHobby hobbies={personal.hobbies} />
            </div>
            <BlogNewPost blog={blog} />
          </div>
          <section css={projectSectionMargin}>
            <ProjectHeader
              count={personal.projects.length}
              tags={['HTML', 'CSS', 'emotion']}
            />
            <div
              css={[
                sectionMarginTop,
                projectCardList(personal.projects.length),
              ]}
            >
              {personal.projects?.map((project) => (
                <PersonalProject key={project.name} project={project} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const main = css`
  margin: 72px 0;
`;

const container = css`
  max-width: 1280px;
  padding: 0 12%;
  margin: 0 auto;
`;

const sectionMarginTop = css`
  margin-top: 42px;
`;

const centerSectionLayout = css`
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  column-gap: 2%;
`;

const centerSectionLeftBlockLayout = css`
  display: grid;
  row-gap: 42px;
`;

const projectSectionMargin = css`
  margin: 42px 0;
`;

const projectCardList = (count: number) => {
  return css`
    display: grid;
    grid-template-columns: repeat(${count}, 296px);
    grid-auto-rows: 560px;
    gap: 2%;
    padding-bottom: 16px;
    overflow-x: auto;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${colors.gray5};
      border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.gray3};
      border-radius: 100px;
    }
  `;
};

export default Home;

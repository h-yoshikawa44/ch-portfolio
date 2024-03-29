import { FC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { Blog } from '@/models/Blog';
import Paper from '@/components/common/Paper';
import { breakPoint, colors } from '@/styles/constants';
import { montserrat } from '@/styles/fonts';

type Props = {
  blog: Blog;
};

const BlogNewPost: FC<Props> = ({ blog }) => {
  return (
    <section>
      <Paper>
        <h2 css={blogSectionTitle}>Blog</h2>
        <p css={blogImgBlock}>
          <Image css={blogImg} src={blog.imgUrl} alt={blog.title ?? ''} fill />
        </p>
        <h3 css={blogTitle}>{blog.title}</h3>
        <p css={blogDescription}>{blog.description}</p>
        <ul css={blogPostList}>
          {blog.posts.map((post) => (
            <li key={post.title} css={blogPostListItem}>
              <a css={blogPostListItemLink} href={post.link}>
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </Paper>
    </section>
  );
};

const blogSectionTitle = css`
  font-family: ${montserrat.style.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  color: ${colors.gray2};
`;

const blogImgBlock = css`
  position: relative;
  width: 100%;
  height: 304px;
  margin-top: 12px;

  @media (width < ${breakPoint.md}px) {
    height: 240px;
  }
`;

const blogImg = css`
  object-fit: contain;
`;

const blogTitle = css`
  margin-top: 16px;
  font-family: ${montserrat.style.fontFamily};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  color: ${colors.gray2};
`;

const blogDescription = css`
  margin-top: 12px;
  font-family: ${montserrat.style.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: ${colors.gray3};
`;

const blogPostList = css`
  padding-left: 20px;
`;

const blogPostListItem = css`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const blogPostListItemLink = css`
  font-family: ${montserrat.style.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: ${colors.gray2};
  transition: color 0.3s;

  &:hover {
    color: ${colors.link};
  }
`;

export default BlogNewPost;

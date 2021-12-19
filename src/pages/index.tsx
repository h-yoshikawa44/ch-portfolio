import { VFC } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Blog } from '@/models/Blog';
import HomePage from '@/components/page/Home';
import { getBlogRss } from '@/lib/rssParser';

type Props = {
  blog: Blog;
};

const Home: VFC<Props> = ({ blog }) => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="'devChallenges.io - Portfolio | by h-yoshikawa44'"
        />
      </Head>

      <HomePage blog={blog} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const blog = await getBlogRss();

  return {
    props: {
      blog,
    },
  };
};

export default Home;

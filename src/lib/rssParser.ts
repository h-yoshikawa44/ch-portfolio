import Parser from 'rss-parser';
import { Blog } from '@/models/Blog';
import { blogDescription } from '@/data/blog';

const getBlogRss = async () => {
  const parser = new Parser();
  const feed = await parser.parseURL('https://changeofpace.site/feed.xml');

  const newBlogPostData = feed.items.slice(0, 5);
  const newBlogPosts = newBlogPostData.map((post) => {
    return { title: post.title, link: post.link };
  });

  const blog: Blog = {
    title: feed.title,
    description: blogDescription,
    imgUrl: '/blog/logo.png',
    posts: newBlogPosts,
  };

  return blog;
};

export { getBlogRss };

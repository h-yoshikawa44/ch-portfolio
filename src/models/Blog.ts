export type Post = {
  title?: string;
  link?: string;
};

export type Blog = {
  title?: string;
  description: string;
  imgUrl: string;
  posts: Post[];
};

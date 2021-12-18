import { ReactNode } from 'react';

export type SocialType = 'github' | 'twitter';

export type Profile = {
  name: string;
  role: string;
  icon: string;
  description: ReactNode;
};

export type SocialAccount = {
  type: SocialType;
  accountId: string;
};

export type Skill = {
  icon: string;
  skillName: string;
};

export type Hobby = {
  img: string;
  title: string;
  description: string;
};

export type Project = {
  img: string;
  tags: string[];
  name: string;
  description: ReactNode;
  demoUrl: string;
  repoUrl: string;
};

export type Personal = Profile & {
  socialAccounts: SocialAccount[];
  skills: Skill[];
  hobbies: Hobby[];
  projects: Project[];
};

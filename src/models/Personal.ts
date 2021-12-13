export type SocialType = 'github' | 'twitter';

export type Profile = {
  name: string;
  role: string;
  icon: string;
  description: string;
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

export type Personal = Profile & {
  socialAccounts: SocialAccount[];
  skills: Skill[];
  hobbies: Hobby[];
};

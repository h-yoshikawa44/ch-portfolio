import { Personal } from '@/models/Personal';

const personal: Personal = {
  name: 'Hitomi Yoshikawa',
  role: 'Web Developer',
  icon: '/personal/my-icon.png',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sapiente earum totam explicabo saepe perferendis ipsa nulla asperiores, rem hic in obcaecati exercitationem nisi molestias magnam ratione tempora unde assumenda.',
  socialAccounts: [
    {
      type: 'github',
      accountId: 'h-yoshikawa44',
    },
    {
      type: 'twitter',
      accountId: 'yoshi44_lion',
    },
  ],
  skills: [
    {
      icon: '/skill-icons/javascript.svg',
      skillName: 'JavaScript',
    },
    {
      icon: '/skill-icons/typescript-icon.svg',
      skillName: 'TypeScript',
    },
    {
      icon: '/skill-icons/react.svg',
      skillName: 'React',
    },
    {
      icon: '/skill-icons/nextjs-icon.svg',
      skillName: 'Next.js',
    },
  ],
  hobbies: [
    {
      img: '/hobbies/game.png',
      title: 'Game',
      description: 'I like to watch people play games and play them myself.',
    },
    {
      img: '/hobbies/illust.png',
      title: 'Illust',
      description:
        "I sometimes draw pictures. (I'd like to study it properly sooner or later.)",
    },
  ],
};

export { personal };

import { Fragment } from 'react';
import { Personal } from '@/models/Personal';

const personal: Personal = {
  name: 'Hitomi Yoshikawa',
  role: 'Web Developer',
  icon: '/personal/my-icon.png',
  description: (
    <Fragment>
      Web Developer。
      <br />
      テスト
    </Fragment>
  ),
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
  projects: [
    {
      img: '/projects/close-to-2.png',
      tags: ['TypeScript', 'React'],
      name: 'Close to 2',
      description: (
        <Fragment>
          web1week のお題「2」の投稿作品。
          <br />
          4択から計算結果が一番「2」に近い式をあてるゲーム。
        </Fragment>
      ),
      demoUrl: 'https://h-yoshikawa44.github.io/close-to-2/',
      repoUrl: 'https://github.com/h-yoshikawa44/close-to-2',
    },
    {
      img: '/projects/jigsaw-like-puzzle.png',
      tags: ['TypeScript', 'React'],
      name: 'Jigsaw Like Puzzle',
      description: (
        <Fragment>
          web1week のお題「Like」の投稿作品。
          <br />
          ジグソーパズルっぽいパズルゲーム（※PC向け）
        </Fragment>
      ),
      demoUrl: 'https://jigsaw-like-puzzle.web.app/',
      repoUrl: 'https://github.com/h-yoshikawa44/jigsaw-like-puzzle',
    },
    {
      img: '/projects/devchallenges/edie-homepage.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      name: 'Edie homepage',
      description: (
        <Fragment>
          devChallenges - Responsive Web 編・課題その7。
          <br />
          LP を作成するチャレンジ。
        </Fragment>
      ),
      demoUrl: 'https://h-yoshikawa44.github.io/ch-edie-homepage/',
      repoUrl: 'https://github.com/h-yoshikawa44/ch-edie-homepage',
    },
    {
      img: '/projects/devchallenges/checkout-page.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      name: 'Checkout Page',
      description: (
        <Fragment>
          devChallenges - Responsive Web 編・課題その6。
          <br />
          買い物フォームページを作成するチャレンジ。
        </Fragment>
      ),
      demoUrl: 'https://h-yoshikawa44.github.io/ch-checkout-page/',
      repoUrl: 'https://github.com/h-yoshikawa44/ch-checkout-page',
    },
    {
      img: '/projects/devchallenges/my-gallery.png',
      tags: ['HTML', 'CSS'],
      name: 'My Gallery',
      description: (
        <Fragment>
          devChallenges - Responsive Web 編・課題その5。
          <br />
          ギャラリーページを作成するチャレンジ。
        </Fragment>
      ),
      demoUrl: 'https://h-yoshikawa44.github.io/ch-my-gallery/',
      repoUrl: 'https://github.com/h-yoshikawa44/ch-my-gallery',
    },
    {
      img: '/projects/devchallenges/recipe-page.png',
      tags: ['HTML', 'CSS'],
      name: 'Recipe page',
      description: (
        <Fragment>
          devChallenges - Responsive Web 編・課題その4。
          <br />
          レシピサイトのレシピページを作成するチャレンジ。
        </Fragment>
      ),
      demoUrl: 'https://h-yoshikawa44.github.io/ch-recipe-page/',
      repoUrl: 'https://github.com/h-yoshikawa44/ch-recipe-page',
    },
    {
      img: '/projects/devchallenges/interiorconsultant.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      name: 'Interior Consultant',
      description: (
        <Fragment>
          devChallenges - Responsive Web 編・課題その3。
          <br />
          インテリアサービスサイトのトップページ +
          メニューを作成するチャレンジ。
        </Fragment>
      ),
      demoUrl: 'https://h-yoshikawa44.github.io/ch-interior-consultant/',
      repoUrl: 'https://github.com/h-yoshikawa44/ch-interior-consultant',
    },
    {
      img: '/projects/devchallenges/my-team-page.png',
      tags: ['HTML', 'CSS'],
      name: 'My Team page',
      description: (
        <Fragment>
          devChallenges - Responsive Web 編・課題その2。
          <br />
          チームメンバー一覧ページを作成するチャレンジ
        </Fragment>
      ),
      demoUrl: 'https://h-yoshikawa44.github.io/ch-my-team-page/',
      repoUrl: 'https://github.com/h-yoshikawa44/ch-my-team-page',
    },
    {
      img: '/projects/devchallenges/404-not-found.png',
      tags: ['HTML', 'CSS'],
      name: '404 Not Found',
      description: (
        <Fragment>
          devChallenges - Responsive Web 編・課題その1。
          <br />
          404ページを作成するチャレンジ。
        </Fragment>
      ),
      demoUrl: 'https://h-yoshikawa44.github.io/ch-404-not-found/',
      repoUrl: 'https://github.com/h-yoshikawa44/ch-404-not-found',
    },
  ],
};

export { personal };

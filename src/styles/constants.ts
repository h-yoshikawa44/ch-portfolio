// ブレイクポイント
const xs = 0;
const sm = 600;
const md = 960;
const lg = 1280;
const xl = 1920;

export const breakPoint = {
  xs,
  sm,
  md,
  lg,
  xl,
} as const;

// フォント
const montserrat = 'Montserrat';

export const fonts = {
  montserrat,
} as const;

// 色
const black = '#333333';
const gray2 = '#4F4F4F';
const gray3 = '#828282';
const gray4 = '#E0E0E0';
const gray5 = '#eaeaea';
const white = '#fff';

const blue = '#2F80ED';

const link = blue;
const border = gray5;

export const colors = {
  black,
  gray2,
  gray3,
  gray4,
  gray5,
  white,
  blue,
  link,
  border,
} as const;

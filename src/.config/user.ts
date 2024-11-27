import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  // site: { title: "講評世界" },
  // seo: { twitter: "@moeyua13" },

  site: {
    title: '부재자 귀중',
    subtitle: '부치지 못한 편지 모음',
    author: '무명씨',
    description: '받는이가 없는 편지 모음입니다.',
    website: 'https://failed.life',
    pageSize: 5,
    socialLinks: [
      {
        name: 'rss',
        href: '/atom.xml',
      },
      // {
      //   name: 'github',
      //   href: 'https://github.com/moeyua/astro-theme-typography',
      // },
      // {
      //   name: 'twitter',
      //   href: 'https://github.com/moeyua/astro-theme-typography',
      // },
      // {
      //   name: 'mastodon',
      //   href: 'https://github.com/moeyua/astro-theme-typography',
      // },
    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/',
      },
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'Categories',
        href: '/categories',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    categoryMap: [{ name: '친구들', path: 'friends' }],
    footer: [
      '© %year <a target="_blank" href="%website">%author</a>',
      'Powered by <a target="_blank" href="https://astro.build/">Astro</a>',
      '<a target="_blank" href="https://github.com/Moeyua/astro-theme-typography">Typography</a> theme by <a target="_blank" href="https://moeyua.com">Moeyua</a>',
    ],
  },
  appearance: {
    theme: 'light',
    locale: 'ko-kr',
    colorsLight: {
      primary: '#381f20',
      background: '#f0ece4',
      dot: "#dcd2cd",
      zen: "#dcd2cd",
    },
    colorsDark: {
      primary: '#FFFFFF',
      background: '#232222',
      dot: '#ffffff',
      zen: '#ffffff',
    },
    fonts: {
      header:
        '"GyeonggiBatang", "Noto Serif KR", "AppleMyungjo", "HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC", serif',
      subheader: '"GyeonggiBatang", "Noto Serif KR", "AppleMyungjo", "HiraMinProN-W6", "Source Han Serif CN", "Source Han Serif SC", "Source Han Serif TC", serif',
      ui: '"Noto Sans KR", "Source Sans Pro", "Roboto", "Helvetica", "Helvetica Neue", "Source Han Sans SC", "Source Han Sans TC", "PingFang SC", "PingFang HK", "PingFang TC", sans-serif',
      article: '"KingSejongInstitute Regular", "Hangeuljaemin4-Regular", "Gowun Batang", "Eulyoo1945", "NanumMyeongjo", "BatangChe", serif',
    },
  },
  seo: {
    // twitter: '@moeyua1',
    meta: [],
    link: [],
  },
  rss: {
    fullText: true,
  },
  comment: {
    // disqus: { shortname: "typography-astro" },
  },
  analytics: {
    googleAnalyticsId: 'G-CCQZKGZXQZ',
    umamiAnalyticsId: '',
  },
  latex: {
    katex: false,
  },
}

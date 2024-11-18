import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  // site: { title: "講評世界" },
  // seo: { twitter: "@moeyua13" },

  site: {
    title: '받는이 없음',
    subtitle: '머뭇거리다 전하지 못한 말들',
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
      primary: '#35332f',
      neutral: '#9d988a',
      background: '#f0ece4',
    },
    colorsDark: {
      primary: '#FFFFFF',
      background: '#232222',
      // background: '#000000',
    },
    fonts: {
      header:
        '"IBM Plex Sans KR", "Yeon Sung", "HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
  seo: {
    twitter: '@moeyua1',
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

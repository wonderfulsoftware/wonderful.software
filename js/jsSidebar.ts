import type { DefaultTheme } from 'vitepress'
export const jsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '[DRAFT] Intro to Programming with JavaScript',
    link: '/js/',
    items: [
      {
        text: '0. Introduction',
        link: '/js/intro/',
      },
      {
        text: '1. Basic Calculation',
        items: [
          {
            text: 'Basic Calculation Exercises',
            link: '/js/exercises/basic-calculation/',
          },
        ],
      },
      {
        text: 'Appendices',
        items: [
          {
            text: 'แหล่งเรียนรู้อื่นๆ',
            link: '/js/resources/',
          },
        ],
      },
    ],
  },
]

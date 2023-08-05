import type { DefaultTheme } from 'vitepress'
export const jsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '[DRAFT] Intro to Programming with JavaScript',
    link: '/js/',
    items: [
      {
        text: '0. Introduction',
        items: [
          {
            text: 'เขียนโปรแกรมเป็นแล้วทำอะไรได้',
            link: '/js/intro.html',
          },
          {
            text: 'ตัวอย่างการใช้ JavaScript Console ในชีวิตประจำวัน',
            link: '/js/daily-life-console.html',
          },
          {
            text: 'พื้นฐานที่ควรมี',
            link: '/js/prerequisites.html',
          },
          {
            text: 'คอร์สนี้จะได้เรียนรู้อะไรบ้าง',
            link: '/js/overview.html',
          },
          {
            text: 'การเรียนรู้การเขียนโปรแกรม',
            link: '/js/learning.html',
          },
        ],
      },
      {
        text: '1. Basic Calculation',
        items: [
          {
            text: 'Basic Calculation Exercises',
            link: '/js/exercises/basic-calculation.html',
          },
        ],
      },
      {
        text: 'บทเสริม',
        items: [
          {
            text: 'การพิมพ์ดีด',
            link: '/js/typing.html',
          },
          {
            text: 'ทำไมถึงเลือกภาษา JavaScript',
            link: '/js/why.html',
          },
          {
            text: 'แหล่งเรียนรู้อื่นๆ',
            link: '/js/resources.html',
          },
        ],
      },
    ],
  },
]

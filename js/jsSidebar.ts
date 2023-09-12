import type { DefaultTheme } from 'vitepress'
export const jsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '[DRAFT] Intro to Programming with JavaScript',
    link: '/js/',
    // Progress -> ⠀ ⠤ ⠶ ⠿
    items: [
      {
        text: '0. Introduction',
        items: [
          {
            text: '⠿ เขียนโปรแกรมเป็นแล้วทำอะไรได้',
            link: '/js/intro.html',
          },
          {
            text: '⠿ ตัวอย่างการใช้ JavaScript Console ในชีวิตประจำวัน',
            link: '/js/daily-life-console.html',
          },
          {
            text: '⠿ การเขียนโปรแกรมคืออะไร',
            link: '/js/programming.html',
          },
          {
            text: '⠿ พื้นฐานที่ควรมี',
            link: '/js/prerequisites.html',
          },
          {
            text: '⠤ คอร์สนี้จะได้เรียนรู้อะไรบ้าง',
            link: '/js/scope.html',
          },
          {
            text: '⠿ การเรียนรู้การเขียนโปรแกรม',
            link: '/js/learning.html',
          },
        ],
      },
      {
        text: '1. ทำความรู้จักกับภาษา JavaScript',
        items: [
          {
            text: '⠿ การคำนวณเบื้องต้น',
            link: '/js/basic-calculation.html',
          },
          {
            text: '⠿ [แบบฝึกหัด] การคำนวณเบื้องต้น',
            link: '/js/exercises/basic-calculation.html',
          },
          {
            text: '⠿ เอกซ์เพรสชันและตัวดำเนินการ (Expressions and Operators)',
            link: '/js/expressions-and-operators.html',
          },
          {
            text: '⠿ [แบบฝึกหัด] ลำดับของตัวดำเนินการ',
            link: '/js/exercises/operator-precedence.html',
          },
          {
            text: '⠶ รู้จักกับ String',
            link: '/js/string-intro.html',
          },
          {
            text: '⠶ รู้จักกับชนิดข้อมูล (Data Types)',
            link: '/js/data-types.html',
          },
          {
            text: '⠶ รู้จักกับตัวแปร (Variables)',
            link: '/js/variables-intro.html',
          },
        ],
      },
      {
        text: '2. ลองสร้างเว็บแอปพลิเคชัน',
        items: [
          {
            text: '⠿ แนะนำเว็บ Glitch',
            link: '/js/hello-glitch.html',
          },
          {
            text: '⠿ HTML แบบเบื้องต้นสุดๆ',
            link: '/js/hello-html.html',
          },
          {
            text: '⠿ [แบบฝึกหัด] HTML เบื้องต้น',
            link: '/js/hello-html-exercises.html',
          },
          {
            text: '⠿ ใส่ JavaScript บนหน้าเว็บ',
            link: '/js/script.html',
          },
          {
            text: '⠿ โต้ตอบกับผู้ใช้งานด้วย input',
            link: '/js/input.html',
          },
          {
            text: '⠀ Mini-projects #1',
            link: '/js/mini-projects-1.html',
          },
          {
            text: '⠀ สร้างเว็บไซต์ของตัวเองบน Neocities',
          },
        ],
      },
      {
        text: '3. โครงสร้างภาษา',
        items: [
          {
            text: '⠀ ฟังก์ชัน (Functions)',
            // link: '/js/function.html',
          },
          {
            text: '⠿ ลงลึกเรื่องตัวเลข',
            link: '/js/number.html',
          },
          {
            text: '⠀ ลงลึกเรื่อง Strings',
            // link: '/js/string.html',
          },
          {
            text: '⠀ เงื่อนไข (Conditionals): if, else, else if',
          },
          {
            text: '⠀ เงื่อนไขแบบหลายตัวเลือก: switch, case',
          },
          {
            text: '⠀ การทำซ้ำ (Loops): while, for',
          },
        ],
      },
      {
        text: 'บทเสริม',
        items: [
          {
            text: '⠶ การพิมพ์ดีด',
            link: '/js/typing.html',
          },
          {
            text: '⠿ ความสำคัญของชั่วโมงบิน',
            link: '/js/quantity.html',
          },
          {
            text: '⠀ ทำไมถึงเลือกภาษา JavaScript',
            link: '/js/why.html',
          },
          {
            text: '⠀ เหตุเกิดจากความขี้เกียจ',
            link: '/js/lazy.html',
          },
          {
            text: '⠶ แหล่งเรียนรู้อื่นๆ',
            link: '/js/resources.html',
          },
        ],
      },
    ],
  },
]

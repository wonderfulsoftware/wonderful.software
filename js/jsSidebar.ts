import type { DefaultTheme } from 'vitepress'
export const jsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '[DRAFT] Intro to Programming with JavaScript',
    // Progress -> ⠀ ⠤ ⠶ ⠿
    items: [
      {
        text: 'หน้าแรก',
        link: '/js/',
      },
      {
        text: 'ยินดีต้อนรับ',
        link: '/js/welcome.html',
      },
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
            text: 'การเขียนโปรแกรมคืออะไร',
            link: '/js/programming.html',
          },
          {
            text: 'พื้นฐานที่ควรมี',
            link: '/js/prerequisites.html',
          },
          {
            text: '⠤ คอร์สนี้จะได้เรียนรู้อะไรบ้าง',
            link: '/js/scope.html',
          },
          {
            text: 'การเรียนรู้การเขียนโปรแกรม',
            link: '/js/learning.html',
          },
        ],
      },
      {
        text: '1. ทำความรู้จักกับภาษา JavaScript',
        items: [
          {
            text: 'การคำนวณเบื้องต้น',
            link: '/js/basic-calculation.html',
          },
          {
            text: 'แบบฝึกหัด: การคำนวณเบื้องต้น',
            link: '/js/exercises/basic-calculation.html',
          },
          {
            text: 'เอกซ์เพรสชันและตัวดำเนินการ (Expressions and Operators)',
            link: '/js/expressions-and-operators.html',
          },
          {
            text: 'แบบฝึกหัด: ลำดับของตัวดำเนินการ',
            link: '/js/exercises/operator-precedence.html',
          },
          {
            text: 'รู้จักกับ String',
            link: '/js/string-intro.html',
          },
          {
            text: 'รู้จักกับชนิดข้อมูล (Data Types)',
            link: '/js/data-types.html',
          },
          {
            text: 'รู้จักกับตัวแปร (Variables)',
            link: '/js/variables-intro.html',
          },
        ],
      },
      {
        text: '2. ลองสร้างเว็บแอปพลิเคชัน',
        items: [
          {
            text: 'แนะนำเว็บ Glitch',
            link: '/js/hello-glitch.html',
          },
          {
            text: 'HTML แบบเบื้องต้นสุดๆ',
            link: '/js/hello-html.html',
          },
          {
            text: 'แบบฝึกหัด: HTML เบื้องต้น',
            link: '/js/hello-html-exercises.html',
          },
          {
            text: 'ใส่ JavaScript บนหน้าเว็บ',
            link: '/js/script.html',
          },
          {
            text: 'โต้ตอบกับผู้ใช้งานด้วย input',
            link: '/js/input.html',
          },
          {
            text: 'รู้จักกับมินิโปรเจค',
            link: '/js/mini-projects.html',
          },
          {
            text: 'มินิโปรเจค: โปรแกรมบวกเลข',
            link: '/js/adder.html',
          },
          {
            text: 'มินิโปรเจค: โปรแกรมนับเลข',
            link: '/js/counter.html',
          },
          {
            text: 'เรื่องน่ารู้เพิ่มเติมเกี่ยวกับ HTML',
            link: '/js/html-tips.html',
          },
        ],
      },
      {
        text: '3. การเขียนเงื่อนไข',
        items: [
          {
            text: 'คอมเม้นต์ในภาษา JavaScript',
            link: '/js/comment.html',
          },
          {
            text: 'การแปลงชนิดข้อมูล',
            link: '/js/explicit-type-conversion.html',
          },
          {
            text: 'รู้จักกับ Boolean',
            link: '/js/boolean-intro.html',
          },
          {
            text: 'การซ่อน/แสดง element',
            link: '/js/dom-hidden.html',
          },
          {
            text: 'มินิโปรเจค: ควิซอย่างง่าย',
            link: '/js/simple-quiz.html',
          },
          {
            text: '⠶ มินิโปรเจค: โปรแกรมสุ่มเลข',
            link: '/js/randomizer.html',
          },
          {
            text: '⠤ การเรียกใช้งานฟังก์ชัน',
            link: '/js/call.html',
          },
          {
            text: '⠶ มินิโปรเจค: หัวหรือก้อย',
            link: '/js/coin-flipper.html',
          },
          {
            text: '⠤ if และ else',
            link: '/js/if-else.html',
          },
          {
            text: '⠀ ตัวดำเนินการทางตรรกศาสตร์',
            link: '/js/logical-operators.html',
          },
        ],
      },
      {
        text: '4. ฟังก์ชัน',
        items: [
          {
            text: '⠀ การสร้างฟังก์ชัน',
            link: '/js/function-intro.html',
          },
          {
            text: '⠀ ลดโค้ดซ้ำซ้อนด้วยฟังก์ชัน',
            link: '/js/dry.html',
          },
          {
            text: '⠀ รับค่าด้วย Parameters และคืนค่าด้วย Return',
            link: '/js/parameters-and-return-values.html',
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

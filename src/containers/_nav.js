export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'MyPage',
        to: '/mypage',
        icon: 'cil-task',
        badge: {
          color: 'primary',
          text: 'お知らせ'
        }
      },
      {
        _name: 'CSidebarNavDropdown',
        name: '初回栄養指導',
        route: '/base',
        icon: 'cil-speech',
        items: [
          {
            name: '情報収集',
            to: '/base/breadcrumbs'
          },
          {
            name: 'ティーチング',
            to: '/base/cards'
          },
          {
            name: '目標の確認',
            to: '/base/carousels'
          }, 
          {
            name: '確認',
            to: '/base/collapses'
          },
          {
            name: 'Q＆A',
            to: '/base/forms'
          },
          {
            name: 'アドバイス',
            to: '/base/jumbotrons'
          },
          {
            name: '力づけ',
            to: '/base/list-groups'
          },
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: '２回目以降の栄養指導',
        route: '/buttons',
        icon: 'cil-speech',
        items: [
          {
            name: 'コーチング',
            to: '/buttons/standard-buttons'
          },
          {
            name: 'ティーチング',
            to: '/buttons/dropdowns'
          },
          {
            name: 'コーチング',
            to: '/buttons/button-groups'
          },
          {
            name: '確認',
            to: '/buttons/brand-buttons'
          },
          {
            name: 'Q&A',
            to: '/buttons/brand-buttons'
          },
          {
            name: 'アドバイス',
            to: '/buttons/brand-buttons'
          },
          {
            name: '力づけ',
            to: '/buttons/brand-buttons'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: '基本情報',
        to: '/charts',
        icon: 'cil-chart-pie'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: '指導記録',
        route: '/icons',
        icon: 'cil-star',
        items: [
          {
            name: 'CoreUI Icons',
            to: '/icons/coreui-icons',
            badge: {
              color: 'info',
              text: 'NEW'
            }
          },
          {
            name: 'Brands',
            to: '/icons/brands'
          },
          {
            name: 'Flags',
            to: '/icons/flags'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: '画像',
        route: '/notifications',
        icon: 'cil-camera',
        items: [
          {
            name: 'Alerts',
            to: '/notifications/alerts'
          },
          {
            name: 'Badges',
            to: '/notifications/badges'
          },
          {
            name: 'Modals',
            to: '/notifications/modals'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'スケジュール',
        to: '/widgets',
        icon: 'cil-calendar',
        badge: {
          color: 'primary',
          text: 'NEW',
          shape: 'pill'
        }
      },
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-2'
      },
    ]
  }
]
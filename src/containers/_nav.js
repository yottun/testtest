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
        _name: 'CSidebarNavItem',
        name: '初回栄養指導',
        to: '/base/breadcrumbs',
        icon: 'cil-chart-pie'
      },
      {
        _name: 'CSidebarNavItem',
        name: '２回目以降の栄養指導',
        to: '/test',
        icon: 'cil-speech'
      },
      {
        _name: 'CSidebarNavItem',
        name: '基本情報',
        to: '/basicInformation',
        icon: 'cil-chart-pie'
      },
      {
        _name: 'CSidebarNavItem',
        name: '指導記録',
        to: '/icons',
        icon: 'cil-star',
        // items: [
        //   {
        //     name: '2020年10月1日',
        //     to: '/icons/coreui-icons',
        //     badge: {
        //       // color: 'info',
        //       // text: 'NEW'
        //     }
        //   },
        //   {
        //     name: '2020年10月2日',
        //     to: '/icons/brands'
        //   },
        //   {
        //     name: '2020年10月3日',
        //     to: '/icons/flags'
        //   }
        // ]
      },
      {
        _name: 'CSidebarNavItem',
        name: '画像',
        to: '/notifications',
        icon: 'cil-camera',
        // items: [
        //   {
        //     name: '2020年10月1日',
        //     to: '/notifications/meal'
        //   },
        //   {
        //     name: '2020年10月2日',
        //     to: '/notifications/badges'
        //   },
        //   {
        //     name: '2020年10月3日',
        //     to: '/notifications/modals'
        //   }
        // ]
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
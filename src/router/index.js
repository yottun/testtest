import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const MyPage = () => import('@/views/MyPage')


const BasicInformation = () => import('@/views/charts/BasicInformation')

// Views - Components
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
// const Test = () => import('@/views/base/Test')
const ClientCreate = () => import('@/views/base/ClientCreate')
const ClientInformation = () => import('@/views/base/ClientInformation')
const DietaryInformation = () => import('@/views/base/DietaryInformation')
const NutritionistRegister = () => import('@/views/base/NutritionistRegister')

// Views - Icons
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
// const Login = () => import('@/views/pages/Login')
const GoogleLogin = () => import('@/views/pages/GoogleLogin')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  store,
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   if (requiresAuth) {
//     if (!store.state.uesr) {
//       next({
//         path: 'google-login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// });

function configRoutes() {
  return [
    {
      path: '/',
      redirect: '/pages/google-login',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'mypage',
          name: 'MyPage',
          component: MyPage,
          // beforeEnter(to, from, next) {
          //   if (this.$store.state.a.userLogin) {
          //     next();
          //   } else {
          //     next('/pages/google-login');
          //   }
          // }
        },
        {
          path: 'basicInformation',
          name: 'BasicInformation',
          component: BasicInformation,
        },
        {
          path: 'clientInformation',
          name: 'ClientInformation',
          component: ClientInformation,
        },
        {
          path: 'client-create',
          name: 'ClientCreate',
          component: ClientCreate
        },
        {
          path: 'nutritionist-register',
          name: 'NutritionistRegister',
          component: NutritionistRegister
        },
        {
          path: 'users',
          meta: {
            label: 'Users'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Users',
              component: Users
            },
            {
              path: ':id',
              meta: {
                label: 'User Details'
              },
              name: 'User',
              component: User
            }
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'dietaryInformation',
              name: 'DietaryInformation',
              component: DietaryInformation
            },
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/coreui-icons',
          name: 'CoreUI Icons',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'Icons library',
              component: CoreUIIcons
            },
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'google-login',
          name: 'GoogleLogin',
          component: GoogleLogin
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
      ]
    }
  ]
}


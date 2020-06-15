import { defineConfig } from 'umi';

export default defineConfig({
  title: '罗湖卫生局',
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: '/assets/lh-logo.png',

  proxy: {
    '/users': {
      target: 'http://192.168.1.8:9000',
      changeOrigin: true,
      pathRewrite: { '^/users': 'users' },
    },
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: '/',
          redirect: '/login',
        },
        {
          path: '/index',
          component: '@/layout/index',
          title: '首页',
        },
        {
          path: '/login',
          component: '@/pages/login',
          title: '登录',
        },
        {
          path: '/course',
          routes: [
            { path: '/course', redirect: '/course/list' },
            { path: '/course/list', component: './Course', title: '用户列表' },
            {
              path: '/course/add',
              component: './Course/addCourse',
              title: '添加用户',
            },
            {
              path: '/course/edit/:id',
              component: './Course/addCourse',
              title: '编辑用户',
            },
          ],
        },
        {
          path: '/about',
          component: './About',
        },
      ],
    },
  ],
  sass: {
    implementation: require('node-sass'),
  },
  cssModulesTypescriptLoader: {},
});

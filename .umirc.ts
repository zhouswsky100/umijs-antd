import { defineConfig } from 'umi';

export default defineConfig({
  history: {
    type: 'hash',
  },
  layout: {
    name: '罗湖卫生局',
    locale: true,
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
      path: '/user',
      component: '@/pages/User',
      menu: {
        name: '用户管理', // 兼容此写法
      },
      layout: {
        hideNav: false,
      },
      access: 'canRead',
    },
    {
      path: '/login',
      component: '@/pages/Login',
      layout: {
        hideNav: true,
        hideMenu: true,
      },
      access: 'canRead',
    },
    {
      path: '/about',
      component: '@/pages/About',
      menu: {
        name: '关于我们', // 兼容此写法
      },
      layout: {
        hideNav: false,
      },
      access: 'canRead',
    },
  ],
  sass: {
    implementation: require('node-sass'),
  },
  cssModulesTypescriptLoader: {},
});

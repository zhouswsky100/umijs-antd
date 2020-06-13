import { defineConfig } from 'umi';
// import pageRoutes from '.config/router.config'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layout/index',
      routes: [
        {
          path: '/',
          component: './About',
          redirect: '/about',
        },
        {
          path: '/table',
          component: './Table',
        },
      ],
    },
  ],
  sass: {
    implementation: require('node-sass'),
  },
  cssModulesTypescriptLoader: {},
});

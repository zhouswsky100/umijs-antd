import { defineConfig } from 'umi';
export default defineConfig({
  layout: {
    name: '卫生管理监督系统', 
    locale: true,
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/table', component: '@/pages/table/index' },
  ],
});
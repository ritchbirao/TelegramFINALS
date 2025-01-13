import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/views/welcome.vue'),
  },
  {
    path: '/authorization',
    name: 'authorization',
    component: () => import('@/views/authorization.vue'),
  },
  {
    path: '/information-1',
    name: 'information-1',
    component: () => import('@/views/telegram-first-info.vue'),
  },
  {
    path: '/information-2',
    name: 'information-2',
    component: () => import('@/views/telegram-second-info.vue'),
  },
  {
    path: '/editProfile',
    name: 'editProfile',
    component: () => import('@/views/edit-profile.vue'),
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: 'contacts',
        component: () => import('@/views/contacts.vue'),
      },
      {
        path: 'settings',
        component: () => import('@/views/settings.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Map.vue') },
      { path: '/reports', component: () => import('pages/Reports.vue') },
      { path: '/analytics', component: () => import('pages/Analytics.vue') },
      { path: '/calendar', component: () => import('pages/Calendar.vue') },
      { path: '/settings', component: () => import('pages/Settings.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

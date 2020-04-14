
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'databuku', component: () => import('pages/Home/DataBuku.vue') },
      { path: 'inputdatabuku', component: () => import('pages/Home/inputdatabuku.vue') },
      { path: 'transaksi', component: () => import('pages/belanja/transaksi.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'auth/Login', component: () => import('pages/users/Login.vue') },
      { path: 'auth/Registrasi', component: () => import('pages/users/Registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

import { createRouter, createWebHistory } from 'vue-router'
import HomeView     from '@/views/HomeView.vue'
import NotFound     from '@/components/common/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },   
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },  
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/StoreView.vue')
  },
  {
    path: '/store/:category',
    name: 'fnb',
    component: () => import('@/views/StoreView.vue')
  }, 
  {
    path: '/store/facility',
    name: 'facility',
    component: () => import('@/views/FacilityView.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/MapView.vue')
  },  
  {
    path: '/popup',
    component: () => import("@/components/layout/LayoutPopup.vue"),
    children: [
      {
        path: '/winAbout',
        component: () => import('@/views/AboutView.vue')
      },
      {
        path: '/winMap',
        component: () => import('@/views/MapView.vue')
      },
      {
        path: '/winNotice',
        component: () => import('@/views/notice/NoticeDetailView.vue')
      },
      {
        path: '/winEvent',
        component: () => import('@/views/event/EventDetailView.vue')
      },
      {
        path: '/winStore',
        component: () => import('@/views/store/StoreDetailView.vue')
      },
    ]
  },  
  {
    path: "/:catchAll(.*)",
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

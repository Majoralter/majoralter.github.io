import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogPost from '@/views/blog/BlogPost.vue'
import Blog from '@/views/blog/Blog.vue'
import Lists from '@/views/lists/Lists.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: BlogPost
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/lists',
    name: 'lists',
    component: Lists,
    children: [
      {
        path: 'websites',
        name: 'list',
        component: () => import('@/views/lists/Websites.vue')
      },
      {
        path: 'books',
        name: 'books',
        component: () => import('@/views/lists/BookShelf.vue')
      },
      {
        path: 'films',
        name: 'films',
        component: () => import('@/views/lists/Films.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

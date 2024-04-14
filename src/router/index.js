import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const routes = [
  // Outras rotas
  {
    path: '/todolist/:itemId?', // Parâmetro itemId é opcional
    name: 'todolist',
    component: () => import('@/pages/todolist.vue') // Substitua 'YourListComponent' pelo nome do seu componente de lista
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // Use as rotas definidas acima
  extendRoutes: setupLayouts,
})

export default router
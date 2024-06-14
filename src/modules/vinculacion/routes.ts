import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/vinculacion',
        name: 'vinculacion',
        component: () => import('./pages/VinculacionPage.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/empresas',
        name: 'empresas',
        component: () => import('./pages/EmpresasPage.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/convenios-cartas',
        name: 'convenios-cartas',
        component: () => import('./pages/EmpresasPage.vue'),
        meta: {
            requiresAuth: true,
        }
    },
];

export default routes;
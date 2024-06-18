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
        component: () => import('./pages/ConveniosCartasPage.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/tipo-practica',
        name: 'tipo-practica',
        component: () => import('./pages/TipoPracticaPage.vue'),
        meta: {
            requiresAuth: true,
        }
    },
];

export default routes;
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
        path: '/empresas-vinculacon',
        name: 'empresas-vinculacon',
        component: () => import('./pages/EmpresasPage.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/convenios-cartas-vinculacion',
        name: 'convenios-cartas-vinculacion',
        component: () => import('./pages/ConveniosCartasPage.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/tipo-practica-vinculacion',
        name: 'tipo-practica-vinculacion',
        component: () => import('./pages/TipoPracticaPage.vue'),
        meta: {
            requiresAuth: true,
        }
    },
];

export default routes;
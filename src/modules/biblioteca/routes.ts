import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/biblioteca',
        name: '',
        component: () => import('./pages/BibliotecaPrincipal.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/pendientes',
        name: 'pendientes-biblioteca',
        component: () => import('./pages/BibliotecaPendientes.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/rechazados',
        name: 'rechazados-biblioteca',
        component: () => import('./pages/BibliotecaRechazados.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/aprobados',
        name: 'aprobados-biblioteca',
        component: () => import('./pages/BibliotecaAprobados.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/historicos',
        name: 'historicos-biblioteca',
        component: () => import('./pages/BibliotecaHistoricos.vue'),
        meta: {
            requiresAuth: true,
        }
    },
];

export default routes;
import { type Router } from 'vue-router'
import type { RutaInterface } from '../dto/menu-rutas-response.dto'
// import { defineAsyncComponent } from 'vue';

export const parseObjectRutas = (rutas: RutaInterface[], router: Router) => {
    rutas.map((ruta) => {
        if (!router.hasRoute(ruta.nombre)) {
            console.log('route added', ruta.nombre)
            router.addRoute({
                path: ruta.path,
                name: ruta.ruta,
                component: () => import(/* @vite-ignore */ `../../../${ruta.component}`),
                meta: {
                    requiresAuth: true
                }
            })
        }
    })

    const rutasPadre = rutas.filter((ruta) => ruta.padre === 0)
    const rutasHijas = rutas.filter((ruta) => ruta.padre !== 0)
    const rutasParseadas = rutasPadre.map((rutaPadre) => {
        const rutasHijasParseadas = rutasHijas.filter((rutaHija) => rutaHija.padre === rutaPadre.id)
        return {
            ...rutaPadre,
            rutasHijas: rutasHijasParseadas
        }
    })
    return rutasParseadas
}

export const removeRoutesOnLogout = (router: Router) => {

    router.getRoutes().forEach((route) => {
        const arr = ['dashboard', 'login', 'not-found']
        const isDeletable = arr.includes(route.name as string)

        if (!isDeletable) {
            router.removeRoute(route.name as string)
        }
    })
}

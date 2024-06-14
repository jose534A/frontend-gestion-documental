import type { RutaInterface } from '../dto/menu-rutas-response.dto'

export const parseObjectRutas = (rutas: RutaInterface[]) => {
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

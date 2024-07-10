import { useApi } from "@/composables/use-api"
import { useMutation, useQuery } from "@tanstack/vue-query"
import type { ResponseHistorico } from '../dto/titulacion-biblioteca.dto';
import type { ResponseAprobados } from '../dto/titulacion-aprobados.dto';
import type { ResponseRechazados } from '../dto/titulacion-rechazados.dto';
import type { ResponsePendientes } from '../dto/titulacion-pendientes.dto';
import type { ResponseActualizacionPendientes} from '../dto/titulacion_actualizacion.dto'
// import { ResponseActualizacionPendientes } from '../dto/titulacion_actualizacion.dto';

export const useGetHistoricoBiblioteca = () => {
    try {
        const query = useQuery({
            queryKey: ['historicos'],
            queryFn: async () => {
                const response = await useApi.get<ResponseHistorico>('/biblioteca/historicos-biblioteca')
                return response.data
            }
        })
        return query
    } catch (error) {
        throw new Error(`${error}`)
    }
}

export const useGetAprobadosBiblioteca = () => {
    try {
        const query = useQuery({
            queryKey: ['aprobados'],
            queryFn: async () => {
                const response = await useApi.get<ResponseAprobados>('/biblioteca/aprobados-biblioteca')
                return response.data
            }
        })
        return query
    } catch (error) {
        throw new Error(`${error}`)
    }
}

export const useGetRechazadosBiblioteca = () => {
    try {
        const query = useQuery({
            queryKey: ['rechazados'],
            queryFn: async () => {
                const response = await useApi.get<ResponseRechazados>('/biblioteca/rechazado-biblioteca')
                return response.data
            }
        })
        return query
    } catch (error) {
        throw new Error(`${error}`)
    }
}

export const useGetPendientesBiblioteca = () => {
    try {
        const query = useQuery({
            queryKey: ['pendientes'],
            queryFn: async () => {
                const response = await useApi.get<ResponsePendientes>('/biblioteca/pendientes-biblioteca')
                return response.data
            }
        })
        return query
    } catch (error) {
        throw new Error(`${error}`)
    }
}

// export const usePutPendientesBiblioteca = () => {
//     try {
//         const mutation = useMutation(
//             {
//                 mutationFn: async (data: ResponseActualizacionPendientes) => {
//                     const response = await useApi.put(`/biblioteca/revision-biblioteca/${data.TITU_ID}`, data)
//                     return response.data
//                 },
//             },
//         )
//         return mutation
//     } catch (error) {
//         throw new Error(`${error}`)
//     }
// }

export const useUpdatePendientes = () => {
    const mutation = useMutation({
        mutationFn: async (data: ResponseActualizacionPendientes) => {
            try
            {
                const { TITU_ID: id, ...obj } = data
                const response = await useApi.put(`/biblioteca/revision-biblioteca/${id}`, obj)

                // const response = await useApi.put(`/biblioteca/revision-biblioteca/${data.TITU_ID}`, {
                //     TITU_BIBLIOTECA_OBSERVACION: data.TITU_BIBLIOTECA_OBSERVACION,
                //     TITU_BIBLIOTECA: data.TITU_BIBLIOTECA
                // });

                if (response.status !== 200){
                    throw new Error('Error al Actualizar');
                }
                return response.data;
            }
            catch(error){
                console.error('Error en la Solicitud PUT: ', error);
                throw error;
            }
        }
    });
    return mutation
}
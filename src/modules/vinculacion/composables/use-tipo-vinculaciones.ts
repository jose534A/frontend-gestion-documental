import { useApi } from '@/composables/use-api'
import { useMutation, useQuery } from '@tanstack/vue-query'
import type { TipoPracticaDto } from '../dto/tipo-practica.dto'

export const useGetTipoPracticasVinculaciones = () => {
    try {
        const query = useQuery({
            queryKey: ['tipo-practicas'],
            queryFn: async () => {
                const response = await useApi.get('vinculacion-tipo-practica')
                return response.data
            }
        })
        return query
    } catch (error) {
        throw new Error(`${error}`)
    }
}

export const usePostTipoPracticaVinculaciones = () => {
    try {
        const mutation = useMutation(
            {
                mutationFn: async (data: TipoPracticaDto) => {
                    const response = await useApi.post('vinculacion-tipo-practica', data)
                    return response.data
                },
            },
        )
        return mutation
    } catch (error) {
        throw new Error(`${error}`)
    }
}

export const usePutTipoPracticaVinculacion = () => {
    try {
        const mutation = useMutation(
            {
                mutationFn: async (data: TipoPracticaDto) => {
                    const response = await useApi.put(`vinculacion-tipo-practica/${data.VINTP_ID}`, data)
                    return response.data
                },
            },
        )
        return mutation
    } catch (error) {
        throw new Error(`${error}`)
    }
}

export const useGetTipoPracticaVinculacionByIdNoQuery = async (id: number) => {
    try {
        const response = await useApi.get(`vinculacion-tipo-practica/${id}`)
        return response.data
    } catch (error) {
        throw new Error(`${error}`)
    }
}
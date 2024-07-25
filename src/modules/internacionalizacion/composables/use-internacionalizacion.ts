import { useApi } from '@/composables/use-api'
import { useMutation, useQuery } from '@tanstack/vue-query'
import type { InternacionalizacionDto } from '../dto/internacionalizacion.dto'

export const useGetInternacionalizacion = () => {
    try {
        const query = useQuery({
            queryKey: ['internacionalizacion'],
            queryFn: async () => {
                const response = await useApi.get<InternacionalizacionDto[]>('internacionalizacion')
                return response.data
            }
        })
        return query
    } catch (error) {
        throw new Error(`${error}`)
    }
}

export const useGetInternacionalizacionByIdNoQuery = async (id: number) => {
    try {
        const response = await useApi.get<InternacionalizacionDto>(`internacionalizacion/${id}`)
        return response.data
    } catch (error) {
        throw new Error(`${error}`)
    }
}

export const usePostInternacionalizacion = () => {
    try {
        const mutation = useMutation({
            mutationFn: async (data: InternacionalizacionDto) => {
                const response = await useApi.post('internacionalizacion', data)
                return response.data
            }
        })
        return mutation
    } catch (error) {
        throw new Error(`${error}`)
    }
}

export const usePutInternacionalizacion = () => {
    try {
        const mutation = useMutation({
            mutationFn: async (data: InternacionalizacionDto) => {
                const {INTER_ID: id, ...obj} = data
                const response = await useApi.put(`internacionalizacion/${id}`, obj)
                return response.data
            }
        })
        return mutation
    } catch (error) {
        throw new Error(`${error}`)
    }
}
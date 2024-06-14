import { useApi } from '@/composables/use-api'
import { useMutation, useQuery } from '@tanstack/vue-query'
import type { EmpresaDto } from '../dto/empresa.dto'

export const useGetEmpresas = () => {
    try {
        const query = useQuery({
            queryKey: ['empresas'],
            queryFn: async () => {
                const response = await useApi.get('vinculacion-empresas')
                console.log(response.data)
                return response.data
            }
        })

        return query
    } catch (error) {
        throw new Error(`${error}`)
    }
}

export const usePostEmpresa = () => {
    try {
        const mutation = useMutation(
            {
                mutationFn: async (data: EmpresaDto) => {
                    const response = await useApi.post('vinculacion-empresas', data)
                    return response.data
                },
                
            },
        )
        return mutation
    } catch (error) {
        throw new Error(`${error}`)
    }
}

import { useApi } from '@/composables/use-api';
import { useQuery } from '@tanstack/vue-query';
import type { InterPaisDto } from '../dto/interpais.dto';


export const useGetInterPaisQuery = () => {
    try {
        const query = useQuery({
            queryKey: ['inter-pais'],
            queryFn: async () => {
                const response = await useApi.get<InterPaisDto[]>('inter-pais')
                return response.data
            }
        })
        return query
    } catch (error) {
        throw new Error(`${error}`)
    }
}
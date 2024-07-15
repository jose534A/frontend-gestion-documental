import { useApi } from "@/composables/use-api"
import { useQuery } from "@tanstack/vue-query"
import type { IntersedesResponseDto } from "../dto/intersedes.dto"


export const useGetIntersedes = () => {
    try {
        const query = useQuery({
            queryKey: ['intersede'],
            queryFn: async () => {
                const response = await useApi.get<IntersedesResponseDto>('intersede')
                return response.data
            }
        })
        return query
    } catch (error) {
        throw new Error(`${error}`)
    }
}
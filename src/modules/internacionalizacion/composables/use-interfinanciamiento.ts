import { useQuery } from "@tanstack/vue-query"
import type { InterFinanciamientoDto } from "../dto/interfinanciemiento.dto"
import { useApi } from "@/composables/use-api"

export const useGetInterFinanciamiento = () => {
    try {
        const query = useQuery({
            queryKey: ['inter-financiamiento'],
            queryFn: async () => {
                const response = await useApi.get<InterFinanciamientoDto[]>('inter-financiamiento')
                return response.data
            }
            
        })
        return query
    } catch (error) {
        throw new Error(`${error}`)
    }
}

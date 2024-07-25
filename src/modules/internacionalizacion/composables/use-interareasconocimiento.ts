import { useApi } from "@/composables/use-api"
import { useQuery } from "@tanstack/vue-query"
import type { InterAreaConocimientoDto } from "../dto/interareaconocimiento.dto"



export const useGetInterAreasConocimiento = () => {
    try {
        const query = useQuery({
            queryKey: ['interareaconocimiento'],
            queryFn: async () => {
                const response = await useApi.get<InterAreaConocimientoDto[]>('interareaconocimiento')
                return response.data
            }
        })
        return query
    } catch (error) {
        throw new Error(`${error}`)
    }
}
import { useQuery } from "@tanstack/vue-query";
import type { CodigoCarreraDto } from "../dto/intercarrera.dto";
import { useApi } from "@/composables/use-api";


export const useGetInterCarreraQuery = () => {
    try {
        const query = useQuery({
            queryKey: ['codigo'],
            queryFn: async () => {
                const response = await useApi.get<CodigoCarreraDto[]>('intercarrera')
                return response.data
            }
        })
        return query
    } catch (error) {
        throw new Error(`${error}`)
    }
}
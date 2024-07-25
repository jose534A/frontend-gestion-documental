import { useApi } from "@/composables/use-api"
import { useQuery } from "@tanstack/vue-query"
import type { InterTipoParticipanteDto } from "../dto/intertipoparticipante.dto"


export const useGetInterTipoParticipanteQuery = () => {
    try {
        const query = useQuery({
            queryKey: ['intertipoparticipante'],
            queryFn: async () => {
                const response = await useApi.get<InterTipoParticipanteDto[]>('intertipoparticipante')
                return response.data
            }
        })
        return query
    } catch (error) {
        throw new Error(`${error}`)
    }
}
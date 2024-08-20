import { useApi } from '@/composables/use-api'
import { useQuery } from '@tanstack/vue-query'
import type { AlumniAgregarType} from '../types/alumni'

export const useGetAlumni = (usuId: number) => {
  const query = useQuery({
    queryKey: ['administracion-graduados-por-carrera', usuId],
    queryFn: async () => {
      try {
        const response = await useApi.get<AlumniAgregarType[]>(
          `administracion/graduados-por-carrera/${usuId}`, 
          {
            headers: {
              'accept': '*/*',
              'apikey': 'documental',
              'apisecret': 'Documental2021file'
            }
          }
        );
        return response.data;
      } catch (error) {
        console.error('Error fetching alumni data:', error);
        throw new Error('Failed to fetch alumni data');
      }
    }
  });
  return query;
}

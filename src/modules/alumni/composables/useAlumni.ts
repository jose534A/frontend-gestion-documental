import { useApi } from '@/composables/use-api'
import { useQuery } from '@tanstack/vue-query'
import type { AlumniResposeType } from '../types/alumni'

export const useGetAlumni = (usuId: number) => {
  const query = useQuery({
    queryKey: ['alumni-usuario-carrera-privilegios', usuId],
    queryFn: async () => {
      try {
        const response = await useApi.get<AlumniResposeType[]>(
          `/alumni/usuario-carrera-privilegios/${usuId}`, 
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

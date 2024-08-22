// import { useApi } from '@/composables/use-api'
// import { useQuery } from '@tanstack/vue-query'
// import type { AlumniTabla2Type} from '../types/alumni'

// export const useGetAlumni = (usuId: number) => {
//   const query = useQuery({
//     queryKey: ['administracion-graduados-por-carrera', usuId],
//     queryFn: async () => {
//       try {
//         const response = await useApi.get<AlumniTabla2Type[]>(
//           `administracion/graduados-por-carrera/${usuId}`, 
//           {
//             headers: {
//               'accept': '*/*',
//               'apikey': 'documental',
//               'apisecret': 'Documental2021file'
//             }
//           }
//         );
//         return response.data;
//       } catch (error) {
//         console.error('Error fetching alumni data:', error);
//         throw new Error('Failed to fetch alumni data');
//       }
//     }
//   });
//   return query;
// }
import { useApi } from '@/composables/use-api';
// import { useQuery } from '@tanstack/vue-query';
import type { AlumniTabla2Type } from '../types/alumni';

export const useGetCarrera =async (CAR_ID: number) => {
  const response = await useApi.get<AlumniTabla2Type[]>(`administracion/graduados-por-carrera?idCarrera=${CAR_ID}`);
  return response
}
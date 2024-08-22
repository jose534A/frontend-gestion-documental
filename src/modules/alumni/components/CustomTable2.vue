<template>
  <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-2">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th class="px-6 py-3">#</th>
            <th v-for="key in visibleHeaders" :key="key" class="px-6 py-3">{{ key }}</th>
            <th class="px-6 py-3">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in filteredUsers" :key="user.CAR_ID"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ index + 1 }}</td>
            <!-- Reemplaza las siguientes líneas con los datos adecuados -->
            <td v-for="key in visibleHeaders" :key="key" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ user[key] }}
            </td>
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <!-- Aquí puedes añadir los botones de acción -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>  
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { AlumniTabla2Type } from '../types/alumni';

const props = defineProps({
  data: {
    type: Array as () => AlumniTabla2Type[],
    required: true
  },
  carId: {
    type: Number,
    required: true
  }
});

const searchQuery = ref('');

const columnVisibility = ref({
  MAGR_NUMERO: true,
  MAGR_CODDIGO_CARRERA: true,
  MAGR_INSTITUCION: true,
  MAGR_CARRERA: true,
  MAGR_LUGAR: true,
  MAGR_DURACION: true,
  MAGR_NIVEL: true,
  MAGR_NUMERO_MATRICULA: true,
  MAGR_TIPO_IDENTIFICACION: true,
  MAGR_CEDULA: true,
  MAGR_NOMBRES: true,
  MAGR_SEXO: true,
  MAGR_NACIONALIDAD: true,
  MAGR_FECHA_INICIO_ESTUDIOS: true,
  MAGR_FECHA_EGRESAMIENTO: true,
  MAGR_TITULO_ADMISION: true,
  MAGR_PROCEDENCIA_TITULO_ADMISION: true,
  MAGR_FECHA_ACTA_GRADO: true,
  MAGR_NUMERO_ACTA_GRADO: true,
  MAGR_DENOMINACION_TITULO: true,
  MAGR_FECHA_REFRENDACION: true,
  MAGR_NUMERO_REFRENDACION: true,
  MAGR_TEMA_DE_TESIS: true,
  MAGR_NUMERO_CEDULA_ASESORES: true,
  MAGR_ASESORES: true,
  MAGR_LECTOR1: true,
  MAGR_LECTOR2: true,
  MAGR_DIRECCIONES: true,
  MAGR_TELEFONO: true,
  MAGR_MAIL: true,
  MAGR_ETNIA: true,
  MAGR_PAIS_NACIONALIDAD: true,
  MAGR_PAIS_RESIDENCIA: true,
  MAGR_PROVINCIA_RECIDENCIA: true,
  MAGR_CANTON_RESIDENCIA: true,
  MAGR_TIPO_DE_COLEGIO: true,
  MAGR_ESTUDIOS_PREVIOS: true,
  MAGR_UNIVERSIDAD_ESTUDIOS_PREVIOS: true,
  MAGR_CARRERA_ESTUDIOS_PREVIOS: true,
  MAGR_TIEMPO_ESTUDIOS_RECONOCIMIENTO: true,
  MAGR_TIPO_RECONOCIMIENTO: true,
  MAGR_MECANISMO_TITULACION: true,
  MAGR_NOTA_PROMEDIO_ACUMULADO: true,
  MAGR_NOTA_TRABAJO_TITULACION: true,
  MAGR_NOTA_FINAL: true,
  MAGR_RESPALDOS: true,
  MAGR_EXPEDIENTE: true,
  MAGR_OBSERVACION: true,
  MAGR_ANALISIS: true,
});

const visibleHeaders = computed(() => {
  return (Object.keys(columnVisibility.value) as Array<keyof typeof columnVisibility.value>)
    .filter(key => columnVisibility.value[key]);
});

const filteredUsers = computed(() => {
  const searchTerm = searchQuery.value.toLowerCase();

  const filtered = props.data.filter(user =>
    user.CAR_ID === props.carId &&
    visibleHeaders.value.some(header =>
      user[header]?.toString().toLowerCase().includes(searchTerm)
    )
  );

  return filtered;
});
</script>

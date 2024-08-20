<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="grid grid-cols-3 gap-4">
        <!-- Renderizar campos principales con v-for -->
        <div class="mb-4" v-for="(field, index) in formFields" :key="index">
          <label class="block mb-2">{{ field.label }}</label>

          <div v-if="field.type === 'select'">
            <select v-model="form[field.model]" class="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white">
              <option v-for="option in field.options" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>

          <div v-else-if="field.type === 'date'">
            <input type="date" v-model="form[field.model]" class="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
          </div>

          <div v-else>
            <input type="text" v-model="form[field.model]" class="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
          </div>
        </div>

        <!-- Campos condicionales -->
        <div v-if="form.MAGR_ESTUDIOS_PREVIOS === 'SI'" class="mb-4">
          <label class="block mb-2">UNIVERSIDAD ESTUDIOS PREVIOS</label>
          <input type="text" v-model="form.MAGR_UNIVERSIDAD_ESTUDIOS_PREVIOS" class="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
        </div>

        <div v-if="form.MAGR_ESTUDIOS_PREVIOS === 'SI'" class="mb-4">
          <label class="block mb-2">CARRERA ESTUDIOS PREVIOS</label>
          <input type="text" v-model="form.MAGR_CARRERA_ESTUDIOS_PREVIOS" class="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
        </div>

        <div v-if="form.MAGR_ESTUDIOS_PREVIOS === 'SI'" class="mb-4">
          <label class="block mb-2">TIEMPO ESTUDIOS RECONOCIMIENTO</label>
          <input type="text" v-model="form.MAGR_TIEMPO_ESTUDIOS_RECONOCIMIENTO" class="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
        </div>

        <div v-if="form.MAGR_ESTUDIOS_PREVIOS === 'SI'" class="mb-4">
          <label class="block mb-2">TIPO RECONOCIMIENTO</label>
          <input type="text" v-model="form.MAGR_TIPO_RECONOCIMIENTO" class="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
        </div>
        <!-- Fin de campos condicionales -->
      </div>

      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Guardar
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { AlumniAgregarType } from '../types/alumni';

// Crear el objeto del formulario con los campos necesarios
const form = ref<AlumniAgregarType>({
  MAGR_ID: 0,  // Número entero predeterminado
  MAGR_NUMERO: '',  // Asume un valor por defecto
  MAGR_CODDIGO_CARRERA: '',
  MAGR_INSTITUCION: '',
  MAGR_CARRERA: '',
  MAGR_LUGAR: '',
  MAGR_DURACION: '',
  MAGR_NIVEL: '',
  MAGR_MODALIDAD: '',
  MAGR_NUMERO_MATRICULA: '',
  MAGR_TIPO_IDENTIFICACION: 0,  // Número entero predeterminado
  MAGR_CEDULA: '',
  MAGR_NOMBRES: '',
  MAGR_SEXO: '',
  MAGR_NACIONALIDAD: '',
  MAGR_FECHA_INICIO_ESTUDIOS: '',
  MAGR_FECHA_EGRESAMIENTO: '',
  MAGR_TITULO_ADMISION: '',
  MAGR_PROCEDENCIA_TITULO_ADMISION: '',
  MAGR_FECHA_ACTA_GRADO: '',
  MAGR_NUMERO_ACTA_GRADO: '',
  MAGR_DENOMINACION_TITULO: '',
  MAGR_FECHA_REFRENDACION: '',
  MAGR_NUMERO_REFRENDACION: '',
  MAGR_TEMA_DE_TESIS: '',
  MAGR_NUMERO_CEDULA_ASESORES: '',
  MAGR_ASESORES: '',
  MAGR_LECTOR1: '',
  MAGR_LECTOR2: '',
  MAGR_DIRECCIONES: '',
  MAGR_TELEFONO: '',
  MAGR_MAIL: '',
  MAGR_ETNIA: '',
  MAGR_PAIS_NACIONALIDAD: '',
  MAGR_PAIS_RESIDENCIA: '',
  MAGR_PROVINCIA_RECIDENCIA: '',
  MAGR_CANTON_RESIDENCIA: '',
  MAGR_TIPO_DE_COLEGIO: '',
  MAGR_ESTUDIOS_PREVIOS: '',
  MAGR_UNIVERSIDAD_ESTUDIOS_PREVIOS: '',
  MAGR_CARRERA_ESTUDIOS_PREVIOS: '',
  MAGR_TIEMPO_ESTUDIOS_RECONOCIMIENTO: '',
  MAGR_TIPO_RECONOCIMIENTO: '',
  MAGR_MECANISMO_TITULACION: '',
  MAGR_NOTA_PROMEDIO_ACUMULADO: '',
  MAGR_NOTA_TRABAJO_TITULACION: '',
  MAGR_NOTA_FINAL: '',
  MAGR_RESPALDOS: '',  // Campo faltante que ahora se incluye
  MAGR_EXPEDIENTE: '',  // Campo faltante que ahora se incluye
  MAGR_OBSERVACION: '',
  CAR_ID: 0,  // Número entero predeterminado
  MAGR_ANALISIS: 0  // Número entero predeterminado
});


// Definir los campos principales del formulario
const formFields = ref<Array<{ label: string; model: keyof AlumniAgregarType; type?: string; options?: string[] }>>([
  { label: 'CODIGO CARRERA', model: 'MAGR_CODDIGO_CARRERA' },
  { label: 'CODIGO DE INSTITUCION', model: 'MAGR_INSTITUCION' },
  { label: 'CARRERA', model: 'MAGR_CARRERA' },
  { label: 'LUGAR', model: 'MAGR_LUGAR' },
  { label: 'DURACION', model: 'MAGR_DURACION' },
  { label: 'NIVEL', model: 'MAGR_NIVEL' },
  { label: 'MODALIDAD', model: 'MAGR_MODALIDAD' },
  { label: 'No. MATRICULA', model: 'MAGR_NUMERO_MATRICULA' },
  { label: 'CÉDULA', model: 'MAGR_CEDULA' },
  { label: 'NOMBRES', model: 'MAGR_NOMBRES' },
  { label: 'SEXO', model: 'MAGR_SEXO', type: 'select', options: ['Masculino', 'Femenino'] },
  { label: 'NACIONALIDAD', model: 'MAGR_NACIONALIDAD' },
  { label: 'FECHA INICIO ESTUDIOS', model: 'MAGR_FECHA_INICIO_ESTUDIOS', type: 'date' },
  { label: 'FECHA EGRESAMIENTO', model: 'MAGR_FECHA_EGRESAMIENTO', type: 'date' },
  { label: 'TITULO ADMISION', model: 'MAGR_TITULO_ADMISION' },
  { label: 'PROCEDENCIA TITULO ADMISION', model: 'MAGR_PROCEDENCIA_TITULO_ADMISION' },
  { label: 'FECHA ACTA GRADO', model: 'MAGR_FECHA_ACTA_GRADO', type: 'date' },
  { label: 'No. ACTA GRADO', model: 'MAGR_NUMERO_ACTA_GRADO' },
  { label: 'DENOMINACION TITULO', model: 'MAGR_DENOMINACION_TITULO' },
  { label: 'FECHA REFRENDACION', model: 'MAGR_FECHA_REFRENDACION', type: 'date' },
  { label: 'No. REFRENDACION', model: 'MAGR_NUMERO_REFRENDACION' },
  { label: 'TEMA TESIS', model: 'MAGR_TEMA_DE_TESIS' },
  { label: 'NÚMERO CÉDULA ASESORES', model: 'MAGR_NUMERO_CEDULA_ASESORES' },
  { label: 'ASESORES', model: 'MAGR_ASESORES' },
  { label: 'LECTOR 1', model: 'MAGR_LECTOR1' },
  { label: 'LECTOR 2', model: 'MAGR_LECTOR2' },
  { label: 'DIRECCIONES', model: 'MAGR_DIRECCIONES' },
  { label: 'TELÉFONO', model: 'MAGR_TELEFONO' },
  { label: 'MAIL', model: 'MAGR_MAIL' },
  { label: 'ETNIA', model: 'MAGR_ETNIA' },
  { label: 'PAÍS NACIONALIDAD', model: 'MAGR_PAIS_NACIONALIDAD' },
  { label: 'PAÍS RESIDENCIA', model: 'MAGR_PAIS_RESIDENCIA' },
  { label: 'PROVINCIA RESIDENCIA', model: 'MAGR_PROVINCIA_RECIDENCIA' },
  { label: 'CANTON RESIDENCIA', model: 'MAGR_CANTON_RESIDENCIA' },
  { label: 'TIPO DE COLEGIO', model: 'MAGR_TIPO_DE_COLEGIO' },
  { label: 'ESTUDIOS PREVIOS', model: 'MAGR_ESTUDIOS_PREVIOS', type: 'select', options: ['SI', 'NO'] },
  { label: 'MECANISMO TITULACION', model: 'MAGR_MECANISMO_TITULACION' },
  { label: 'NOTA PROMEDIO ACUMULADO', model: 'MAGR_NOTA_PROMEDIO_ACUMULADO' },
  { label: 'NOTA TRABAJO TITULACION', model: 'MAGR_NOTA_TRABAJO_TITULACION' },
  { label: 'NOTA FINAL', model: 'MAGR_NOTA_FINAL' },
  { label: 'OBSERVACIONES', model: 'MAGR_OBSERVACION' }
]);

const submitForm = () => {
  console.log('Form data:', form.value);
  // Aquí puedes añadir la lógica para enviar el formulario al backend
};
</script>

<style scoped>
/* Puedes agregar estilos aquí si es necesario */
</style>

<!-- // Definir los campos principales del formulario
// const formFields = ref<Array<{ label: string; model: keyof AlumniAgregarType; type?: string; options?: string[] }>>([
//   { label: 'CODIGO CARRERA', model: 'codigoCarrera' },
//   { label: 'CODIGO DE INSTITUCION', model: 'codigoInstitucion' },
//   { label: 'CARRERA', model: 'carrera' },
//   { label: 'LUGAR', model: 'lugar' },
//   { label: 'DURACION', model: 'duracion' },
//   { label: 'NIVEL', model: 'nivel' },
//   { label: 'MODALIDAD', model: 'modalidad' },
//   { label: 'No. MATRICULA', model: 'noMatricula' },
//   { label: 'CÉDULA', model: 'cedula' },
//   { label: 'NOMBRES', model: 'nombres' },
//   { label: 'SEXO', model: 'sexo', type: 'select', options: ['Masculino', 'Femenino'] },
//   { label: 'NACIONALIDAD', model: 'nacionalidad' },
//   { label: 'FECHA INICIO ESTUDIOS', model: 'fechaInicioEstudios', type: 'date' },
//   { label: 'FECHA EGRESAMIENTO', model: 'fechaEgresamiento', type: 'date' },
//   { label: 'TITULO ADMISION', model: 'tituloAdmision' },
//   { label: 'PROCEDENCIA TITULO ADMISION', model: 'procedenciaTituloAdmision' },
//   { label: 'FECHA ACTA GRADO', model: 'fechaActaGrado', type: 'date' },
//   { label: 'No. ACTA GRADO', model: 'noActaGrado' },
//   { label: 'DENOMINACION TITULO', model: 'denominacionTitulo' },
//   { label: 'FECHA REFRENDACION', model: 'fechaRefrendacion', type: 'date' },
//   { label: 'No. REFRENDACION', model: 'noRefrendacion' },
//   { label: 'TEMA TESIS', model: 'temaTesis' },
//   { label: 'NÚMERO CÉDULA ASESORES', model: 'numeroCedulaAsesores' },
//   { label: 'ASESORES', model: 'asesores' },
//   { label: 'LECTOR 1', model: 'lector1' },
//   { label: 'LECTOR 2', model: 'lector2' },
//   { label: 'DIRECCIONES', model: 'direcciones' },
//   { label: 'TELÉFONO', model: 'telefono' },
//   { label: 'MAIL', model: 'mail' },
//   { label: 'ETNIA', model: 'etnia' },
//   { label: 'PAÍS NACIONALIDAD', model: 'paisNacionalidad' },
//   { label: 'PAÍS RESIDENCIA', model: 'paisResidencia' },
//   { label: 'PROVINCIA RESIDENCIA', model: 'provinciaResidencia' },
//   { label: 'CANTON RESIDENCIA', model: 'cantonResidencia' },
//   { label: 'TIPO DE COLEGIO', model: 'tipoColegio' },
//   { label: 'ESTUDIOS PREVIOS', model: 'estudiosPrevios', type: 'select', options: ['SI', 'NO'] },
//   { label: 'MECANISMO TITULACION', model: 'mecanismoTitulacion' },
//   { label: 'NOTA PROMEDIO ACUMULADO', model: 'notaPromedioAcumulado' },
//   { label: 'NOTA TRABAJO TITULACION', model: 'notaTrabajoTitulacion' },
//   { label: 'NOTA FINAL', model: 'notaFinal' },
//   { label: 'OBSERVACIONES', model: 'observaciones' }
// ]); -->
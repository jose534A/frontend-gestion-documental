<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="grid grid-cols-3 gap-4">
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
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Guardar
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define a type that includes all form fields
type FormFieldsType = {
  codigoCarrera: string;
  codigoInstitucion: string;
  carrera: string;
  lugar: string;
  duracion: string;
  nivel: string;
  modalidad: string;
  noMatricula: string;
  cedula: string;
  nombres: string;
  sexo: string;
  nacionalidad: string;
  fechaInicioEstudios: string;
  fechaEgresamiento: string;
  tituloAdmision: string;
  procedenciaTituloAdmision: string;
  fechaActaGrado: string;
  noActaGrado: string;
  denominacionTitulo: string;
  fechaRefrendacion: string;
  noRefrendacion: string;
  temaTesis: string;
  numeroCedulaAsesores: string;
  asesores: string;
  lector1: string;
  lector2: string;
  direcciones: string;
  telefono: string;
  mail: string;
  etnia: string;
  paisNacionalidad: string;
  paisResidencia: string;
  provinciaResidencia: string;
  cantonResidencia: string;
  tipoColegio: string;
  estudiosPrevios: string;
  mecanismoTitulacion: string;
  notaPromedioAcumulado: string;
  notaTrabajoTitulacion: string;
  notaFinal: string;
  observaciones: string;
};

// Create the form object with the defined type
const form = ref<FormFieldsType>({
  codigoCarrera: '',
  codigoInstitucion: '',
  carrera: '',
  lugar: '',
  duracion: '',
  nivel: '',
  modalidad: '',
  noMatricula: '',
  cedula: '',
  nombres: '',
  sexo: '',
  nacionalidad: '',
  fechaInicioEstudios: '',
  fechaEgresamiento: '',
  tituloAdmision: '',
  procedenciaTituloAdmision: '',
  fechaActaGrado: '',
  noActaGrado: '',
  denominacionTitulo: '',
  fechaRefrendacion: '',
  noRefrendacion: '',
  temaTesis: '',
  numeroCedulaAsesores: '',
  asesores: '',
  lector1: '',
  lector2: '',
  direcciones: '',
  telefono: '',
  mail: '',
  etnia: '',
  paisNacionalidad: '',
  paisResidencia: '',
  provinciaResidencia: '',
  cantonResidencia: '',
  tipoColegio: '',
  estudiosPrevios: '',
  mecanismoTitulacion: '',
  notaPromedioAcumulado: '',
  notaTrabajoTitulacion: '',
  notaFinal: '',
  observaciones: ''
});

// Define the form fields with the corresponding keys from the type
const formFields = ref<Array<{ label: string; model: keyof FormFieldsType; type?: string; options?: string[] }>>([
  { label: 'CODIGO CARRERA', model: 'codigoCarrera' },
  { label: 'CODIGO DE INSTITUCION', model: 'codigoInstitucion' },
  { label: 'CARRERA', model: 'carrera' },
  { label: 'LUGAR', model: 'lugar' },
  { label: 'DURACION', model: 'duracion' },
  { label: 'NIVEL', model: 'nivel' },
  { label: 'MODALIDAD', model: 'modalidad' },
  { label: 'No. MATRICULA', model: 'noMatricula' },
  { label: 'CÉDULA', model: 'cedula' },
  { label: 'NOMBRES', model: 'nombres' },
  { label: 'SEXO', model: 'sexo', type: 'select', options: ['Masculino', 'Femenino'] },
  { label: 'NACIONALIDAD', model: 'nacionalidad' },
  { label: 'FECHA INICIO ESTUDIOS', model: 'fechaInicioEstudios', type: 'date' },
  { label: 'FECHA EGRESAMIENTO', model: 'fechaEgresamiento', type: 'date' },
  { label: 'TITULO ADMISION', model: 'tituloAdmision' },
  { label: 'PROCEDENCIA TITULO ADMISION', model: 'procedenciaTituloAdmision' },
  { label: 'FECHA ACTA GRADO', model: 'fechaActaGrado', type: 'date' },
  { label: 'No. ACTA GRADO', model: 'noActaGrado' },
  { label: 'DENOMINACION TITULO', model: 'denominacionTitulo' },
  { label: 'FECHA REFRENDACION', model: 'fechaRefrendacion', type: 'date' },
  { label: 'No. REFRENDACION', model: 'noRefrendacion' },
  { label: 'TEMA TESIS', model: 'temaTesis' },
  { label: 'NÚMERO CÉDULA ASESORES', model: 'numeroCedulaAsesores' },
  { label: 'ASESORES', model: 'asesores' },
  { label: 'LECTOR 1', model: 'lector1' },
  { label: 'LECTOR 2', model: 'lector2' },
  { label: 'DIRECCIONES', model: 'direcciones' },
  { label: 'TELÉFONO', model: 'telefono' },
  { label: 'MAIL', model: 'mail' },
  { label: 'ETNIA', model: 'etnia' },
  { label: 'PAÍS NACIONALIDAD', model: 'paisNacionalidad' },
  { label: 'PAÍS RESIDENCIA', model: 'paisResidencia' },
  { label: 'PROVINCIA RESIDENCIA', model: 'provinciaResidencia' },
  { label: 'CANTON RESIDENCIA', model: 'cantonResidencia' },
  { label: 'TIPO DE COLEGIO', model: 'tipoColegio' },
  { label: 'ESTUDIOS PREVIOS', model: 'estudiosPrevios', type: 'select', options: ['SI', 'NO'] },
  { label: 'MECANISMO TITULACION', model: 'mecanismoTitulacion' },
  { label: 'NOTA PROMEDIO ACUMULADO', model: 'notaPromedioAcumulado' },
  { label: 'NOTA TRABAJO TITULACION', model: 'notaTrabajoTitulacion' },
  { label: 'NOTA FINAL', model: 'notaFinal' },
  { label: 'OBSERVACIONES', model: 'observaciones' }
]);

const submitForm = () => {
  console.log('Form data:', form.value);
  // Aquí puedes añadir la lógica para enviar el formulario al backend
};
</script>

<style scoped>
/* Puedes agregar estilos aquí si es necesario */
</style>

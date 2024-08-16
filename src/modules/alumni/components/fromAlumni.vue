<template>
    <div>
      <form @submit.prevent="saveDetails">
        <!-- Contenido del formulario -->
        <div class="grid grid-cols-2 gap-4">
          <!-- Campo 1: CODIGO CARRERA -->
          <div>
            <label class="block mb-2">CODIGO CARRERA</label>
            <input 
              v-model="form.codigoCarrera" 
              type="text" 
              class="block w-full p-2 bg-gray-50 border border-gray-300 rounded-lg"
            >
          </div>
          <!-- Campo 2: CODIGO INSTITUCION -->
          <div>
            <label class="block mb-2">CODIGO INSTITUCION</label>
            <input 
              v-model="form.codigoInstitucion" 
              type="text" 
              class="block w-full p-2 bg-gray-50 border border-gray-300 rounded-lg"
            >
          </div>
          <!-- Puedes agregar más campos aquí de manera similar -->
        </div>
        
        <!-- Botones de Guardar y Cancelar -->
        <div class="mt-4 flex space-x-4">
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg">Guardar</button>
          <button type="button" class="bg-gray-500 text-white px-4 py-2 rounded-lg" @click="cancel">Cancelar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Objeto reactivo para manejar los datos del formulario
  const form = ref({
    codigoCarrera: '',
    codigoInstitucion: '',
    // Otros campos...
  });
  
  // Función para manejar el evento de guardado del formulario
  const saveDetails = () => {
    // Aquí puedes añadir la lógica para guardar los detalles (enviar a una API, etc.)
    console.log('Detalles guardados:', form.value);
  };
  
  // Función para manejar el evento de cancelar
  const cancel = () => {
    // Lógica para cancelar y limpiar el formulario o cerrar el modal/formulario
    form.value = {
      codigoCarrera: '',
      codigoInstitucion: '',
      // Restablecer otros campos si es necesario
    };
    console.log('Formulario cancelado');
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos personalizados aquí si es necesario */
  </style>
  
<template>
  <div>
    <div class="flex">
      <!-- Input de búsqueda -->
      <div>
        <form class="py-2 px-2">
          <label class="sr-only">Búsqueda</label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <!-- Icono de búsqueda -->
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" v-model="searchQuery" placeholder="Buscar . . ."
              class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
        </form>
      </div>

      <!-- Dropdowns y otros botones aquí -->
    </div>

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
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ getPadreNombre(user.CAR_PADREESC) }}</td>
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ user.CAR_NOMBRE }}</td>
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ user.CAR_ACTIVA }}</td>
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <button @click="handleAlumni(user.CAR_ID)"
                class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 m-auto dark:bg-blue-600 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-800">
                Ver
              </button>
            
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mostrar CAR_NOMBRE seleccionado -->
    <div v-if="selectedCarNombre" class="mt-4 text-xl font-bold">
      {{ selectedCarNombre }}
    </div>

    <!-- Botones "Ver" y "Agregar" que se muestran al hacer clic en "Ver" -->
    <div v-if="showButtons" class="flex space-x-4 mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-lg" @click="viewDetails">Ver</button>
      <button class="bg-green-500 text-white px-4 py-2 rounded-lg" @click="toggleForm">Agregar</button>
    </div>

    <!-- Formulario de edición que se muestra al hacer clic en "Agregar" -->
    <div v-if="isFormVisible" class="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-800 text-white">
      <FromAlumni />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { AlumniResposeType } from '../types/alumni';
import FromAlumni from '../components/fromAlumni.vue'; 

const props = defineProps({
  data: {
    type: Array as () => AlumniResposeType[],
    required: true
  }
});

const emit = defineEmits<{
  (e: 'showDetails', id: number): void;
  (e: 'editDetails', id: number): void;
}>();

const showButtons = ref(false);
const selectedUserId = ref<number | null>(null);
const searchQuery = ref('');
const isFormVisible = ref(false);

// Acción para mostrar/ocultar el formulario al hacer clic en "Agregar"
const toggleForm = () => {
  isFormVisible.value = !isFormVisible.value;
};

// Computada para obtener los encabezados visibles
const visibleHeaders = computed(() => {
  return (Object.keys(columnVisibility.value) as Array<keyof typeof columnVisibility.value>)
    .filter(key => columnVisibility.value[key]);
});

// Filtra los usuarios según el término de búsqueda y el campo `CAR_CARRERA`
const filteredUsers = computed(() => {
  const searchTerm = searchQuery.value.toLowerCase();
  return props.data.filter(user =>
    visibleHeaders.value.some(header =>
      user[header]?.toString().toLowerCase().includes(searchTerm)
    )
  );
});

// Obtener el nombre del padre basado en el ID
const getPadreNombre = (padreId: number) => {
  const padre = props.data.find(padre => padre.CAR_ID === padreId);
  return padre ? padre.CAR_NOMBRE : 'N/A';
};

const columnVisibility = ref({
  CAR_NOMBRE: true,
  CAR_CARRERA: true,
  CAR_ACTIVA_ESCUELA: true
});

// Computada para obtener el nombre del usuario seleccionado
const selectedCarNombre = computed(() => {
  const selectedUser = props.data.find(user => user.CAR_ID === selectedUserId.value);
  return selectedUser ? selectedUser.CAR_NOMBRE : '';
});

// Manejar la acción de "Ver"
const handleAlumni = (carId: number) => {
  selectedUserId.value = carId;
  showButtons.value = true;
};


// Acción para el botón "Ver"
const viewDetails = () => {
  if (selectedUserId.value !== null) {
    emit('showDetails', selectedUserId.value);
  }
};

</script>

<style scoped>
.me-2 {
  margin-right: 0.5rem;
}
.mt-4 {
  margin-top: 1rem;
}
</style>

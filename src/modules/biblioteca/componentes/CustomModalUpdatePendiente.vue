<template>
    <div v-if="open"
        class="fixed top-0 left-0 sm:ml-32 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div class="bg-white rounded shadow-lg max-w-[400px] min-w-[350px] max-h-[500px] overflow-auto" @click.stop>
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Modificar Estado
                        </h3>
                        <button @click="closeModal" type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="crud-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Cerrar modal</span>
                        </button>
                    </div>
                    <form class="p-4 md:p-5" @submit.prevent="onSubmit">
                        <div class="grid gap-4 mb-4 grid-cols-2">
                            <div class="col-span-2 sm:col-span-2">
                                <label for="category"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado</label>
                                <select id="category" v-model="selectedOption"
                                    @change="handleOptionChange"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                    <option value="" selected>[Seleccione un Estado]</option>
                                    <option value="2">Rechazado</option>
                                    <option value="3">Aprobado</option>
                                </select>
                            </div>
                            <div v-if="showObservations" class="col-span-2">
                                <label for="observaciones"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Observaciones</label>
                                <textarea v-model="observaciones" id="observaciones" rows="4" required
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Escriba las Observaciones aquí"></textarea>
                            </div>
                        </div>
                        <button type="submit"
                            class="flex text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 m-auto dark:bg-blue-600 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-800">
                            <svg class="w-6 h-6 text-write dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                    d="M11 16h2m6.707-9.293-2.414-2.414A1 1 0 0 0 16.586 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.414a1 1 0 0 0-.293-.707ZM16 20v-6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6h8ZM9 4h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4Z" />
                            </svg>
                            &nbsp;&nbsp;Actualizar
                        </button>
                        <!-- <div>Formulario {{props.itemUpdate}}</div> -->
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUpdatePendientes } from '../composables/use-biblioteca';
import type { ResponseActualizacionPendientes } from '../dto/titulacion_actualizacion.dto';
import { useQueryClient } from '@tanstack/vue-query';

const observaciones = ref<string>();
const selectedOption = ref<string>('');
const showObservations = ref(false);
const queryClient = useQueryClient()

const props = defineProps({
    open: {
        type: Boolean,
        default: false
    },
    itemUpdate: {
        type: Number,
        default: null,
        required: false
    },
})

onMounted(() => {
    props.itemUpdate;
});

const queryUpdate = useUpdatePendientes();

const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
}

const handleOptionChange = () => {
    showObservations.value = selectedOption.value === '2';
    console.log(selectedOption.value);
}

const pendientesBiblioteca = ref<ResponseActualizacionPendientes>({
    TITU_BIBLIOTECA: 0,
    TITU_BIBLIOTECA_OBSERVACION: ""
});

const updatePendientes = async () => {
    pendientesBiblioteca.value.TITU_BIBLIOTECA_OBSERVACION = observaciones.value ?? ""
    pendientesBiblioteca.value.TITU_BIBLIOTECA = parseInt(selectedOption.value) ?? 0
    pendientesBiblioteca.value.TITU_ID = props.itemUpdate
    console.log(pendientesBiblioteca.value)    
    await queryUpdate.mutateAsync(pendientesBiblioteca.value)
    if(queryUpdate.isSuccess){
        console.log(queryUpdate.data)
        queryClient.invalidateQueries({ queryKey: ['pendientes']})
    }

    if(queryUpdate.isError){
        console.error(queryUpdate.error)
    }

    emit('close');
}

const onSubmit = () => {
    updatePendientes();
}
</script>

<style>
.text-custom-color {
    color: rgb(169, 222, 243); /* o #A9DEF3 */
}
.bg-custom-color {
    background-color: rgb(169, 222, 243); /* o #A9DEF3 */
}
.bg-custom-color:hover important {
    background-color: rgb(150, 200, 230); /* Color ligeramente diferente para hover */
}
</style>

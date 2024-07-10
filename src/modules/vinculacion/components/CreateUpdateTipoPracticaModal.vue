<template>
    <div v-if="open"
        class="fixed top-0 left-0 sm:ml-32 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
        @click="closeModal">

        <div class="bg-white rounded shadow-lg max-w-[400px] min-w-[350px] max-h-[500px] overflow-auto" @click.stop>
            <div class="px-4 py-2 flex justify-between items-center">
                <h2 class="text-xl">Crear nuevo tipo de práctica</h2>
                <button @click="closeModal"
                    class="bg-red-400 rounded-xl px-3 py-2 text-xs text-slate-100">Cerrar</button>
            </div>
            <div class="p-4">
                <form @submit.prevent="onSubmit">
                    <div class="mb-4">
                        <label class="block mb-2" for="namePract">Nombre del tipo de Práctica</label>
                        <input v-model="tipoPractica.VINTP_NOMBRE" id="namePract" type="text"
                            class="w-full px-3 py-2 border rounded" required>
                    </div>
                    
                    <!-- Agregar slider para actualizar el estado -->
                    <div class="mb-4" v-if="props.itemUpdate">
                        <label class="block mb-2">Estado</label>
                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" v-model="tipoPractica.VINTP_ESTADO" class="sr-only peer"
                                :checked="tipoPractica.VINTP_ESTADO === 1">
                            <div
                                class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                            </div>
                            <span
                                class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Deshabilitar/Habilitar</span>
                        </label>

                    </div>
                    <!--  -->

                    <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded">{{ !!props.itemUpdate ?
                        'Actualizar' : 'Crear' }}</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useQueryClient } from '@tanstack/vue-query';
import type { TipoPracticaDto } from '../dto/tipo-practica.dto';
import { useGetTipoPracticaVinculacionByIdNoQuery, usePostTipoPracticaVinculaciones, usePutTipoPracticaVinculacion } from '../composables/use-tipo-vinculaciones';

const queryClient = useQueryClient()

const tipoPractica = ref<TipoPracticaDto>({
    VINTP_NOMBRE: '',
});

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

watch(() => props.itemUpdate, async (value) => {
    if (value) {
        tipoPractica.value = await useGetTipoPracticaVinculacionByIdNoQuery(value)
    } else {
        tipoPractica.value = {
            VINTP_NOMBRE: '',
        }
    }
})

const emit = defineEmits(['close'])

const mutationCreate = usePostTipoPracticaVinculaciones()
const mutationUpdate = usePutTipoPracticaVinculacion()

const addEmpresa = async () => {
    await mutationCreate.mutateAsync(tipoPractica.value)
    if (mutationCreate.isSuccess) {
        emit('close')
        queryClient.invalidateQueries({ queryKey: ['practica-tipos'] })
    } else {
        alert('Error al crear la empresa')
    }
}

const updateEmpresa = async () => {
    tipoPractica.value.VINTP_ID = props.itemUpdate
    tipoPractica.value.VINTP_ESTADO = tipoPractica.value.VINTP_ESTADO ? 1 : 0
    await mutationUpdate.mutateAsync(tipoPractica.value)
    if (mutationUpdate.isSuccess) {
        emit('close')
        queryClient.invalidateQueries({ queryKey: ['practica-tipos'] })
    } else {
        alert('Error al crear la empresa')
    }

}

const onSubmit = () => {
    if (props.itemUpdate) {
        updateEmpresa()
    } else {
        addEmpresa()
    }
}

const closeModal = () => {
    emit('close')
}

</script>

<style scoped></style>
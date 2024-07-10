<template>
    <DashboardLayout>
        <div>
            <h1 class="text-2xl font-normal dark:text-white">Biblioteca<small
                    class="ms-1 text-gray-400 dark:text-gray-300"> - Pendientes de Aprobación</small></h1>
            <br />
            <!-- Datos Aprobados -->
            <DataTableEdit :data="query.data.value?.pendientes" :dominio="query.data.value?.dominio" @update-row="openModalToUpdate"/>
            <br />
        </div>
    </DashboardLayout>
    <ModalUpdatePendiente :open="isModalOpen" :item-update="itemUpdate" @close="closeModal"/>
</template>

<script setup lang="ts">
import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue';
import DataTableEdit from '../componentes/CustomDataTableEdit.vue'
import { useGetPendientesBiblioteca } from '../composables/use-biblioteca';
import { onMounted, ref, watch } from 'vue';
import ModalUpdatePendiente from '../componentes/CustomModalUpdatePendiente.vue'

const query = useGetPendientesBiblioteca();
const isModalOpen = ref(false)
const itemUpdate = ref<number>()
const dataObservaciones = ref()

onMounted(() => {
    dataObservaciones.value = query.data.value
})

// watchEffect(() => {
//     dataObservaciones.value = query.data.value
// })

watch(itemUpdate, (newValue) => {
    dataObservaciones.value = newValue
    console.log('itemUpdate', newValue)
})

// const openModal = () => {
//     console.log('Abrir Modal')
//     isModalOpen.value = true
// }

const closeModal = () => {
    console.log('Cerrar Modal')
    isModalOpen.value = false
}

const openModalToUpdate = (id: number) => {
    console.log('Actualiza Pendiente', id)
    isModalOpen.value = true
    itemUpdate.value = id
}

</script>

<style scoped></style>
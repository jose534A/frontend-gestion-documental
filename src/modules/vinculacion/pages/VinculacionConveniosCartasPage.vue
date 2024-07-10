<template>
    <DashboardLayout>
        <div class="flex justify-between">
            <div>
                <h2 class="text-2xl font-bold">Cartas y convenios</h2>
            </div>
            <div>
                <button @click="openModalToCreate"
                    class="px-4 py-2 text-white bg-blue-500 rounded-lg h-10 hover:bg-blue-800 hover:cursor-pointer focus:ring-4 focus:ring-blue-300 focus:outline-none">Crear
                    Carta Convenio</button>
            </div>
        </div>

        <div>
            <CustomDataTable :data="query.data.value" @update-row="openModalToUpdate" />
        </div>
        <!-- Agregar modal -->
        <CreateUpdateCartaConvenioModal :open="isModalOpen" @close="closeModal" :item-update="itemUpdate" />
    </DashboardLayout>
</template>

<script setup lang="ts">
import CustomDataTable from '@/components/CustomDataTable.vue';
import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue';
import { onMounted, ref, watch, watchEffect } from 'vue';
import { useGetConveniosCartas } from '../composables/use-cartas-convenios';

import CreateUpdateCartaConvenioModal from '../components/CreateUpdateCartaConvenioModal.vue';

const query = useGetConveniosCartas()

const dataTipoPractica = ref([])

const itemUpdate = ref()

const isModalOpen = ref(false)

onMounted(() => {
    dataTipoPractica.value = query.data.value
})

watchEffect(() => {
    dataTipoPractica.value = query.data.value
})

watch(itemUpdate, (newValue) => {
    console.log('itemUpdate', newValue)
})

const openModalToCreate = () => {
    console.log('Crear tipo de practica')
    isModalOpen.value = true
}

const openModalToUpdate = (id: number) => {
    console.log('Actualizar tipo de practica', id)
    isModalOpen.value = true
    itemUpdate.value = id
}

const closeModal = () => {
    console.log('Cerrar modal')
    isModalOpen.value = false
}



</script>

<style scoped></style>
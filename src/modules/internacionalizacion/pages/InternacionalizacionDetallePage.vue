<template>
    <DashboardLayout>
        <div class="flex justify-between">
            <div>
                <h2 class="text-2xl font-bold">Internacionalización Detalle</h2>
            </div>
            <div>
                <button
                    class="px-4 py-2 text-white bg-blue-500 rounded-lg h-10 hover:bg-blue-800 hover:cursor-pointer focus:ring-4 focus:ring-blue-300 focus:outline-none"
                    @click="openModalToCreate">Agregar</button>
            </div>
        </div>
        <div>
            <!-- <CustomDataTable :data="queryInternacionalizacion.data" @update-row="openModalToUpdate" /> -->
            <CustomDataTableInternacionalizacion :data="queryInternacionalizacion.data.value"
                @update-row="openModalToUpdate" />
        </div>
        <!-- <CreateUpdateEmpesaModal :open="openCreateUpdateModal" @close="closeModal" :item-update="itemUpdate" /> -->
        <CreateUpdateInternacionalizacionModal :open="openCreateUpdateModal" @close="closeModal" :item-update="itemUpdate" />
    </DashboardLayout>
</template>

<script setup lang="ts">
import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue';

import { onMounted, ref, watch, watchEffect } from 'vue';
import type { InternacionalizacionDto } from '../dto/internacionalizacion.dto';
import { useGetInternacionalizacion } from '../composables/use-internacionalizacion';
import CustomDataTableInternacionalizacion from '../components/CustomDataTableInternacionalizacion.vue';
import CreateUpdateInternacionalizacionModal from '../components/CreateUpdateInternacionalizacionModal.vue';

const dataInternacionalizacion = ref<InternacionalizacionDto[]>()
const queryInternacionalizacion = useGetInternacionalizacion()
// const dataEmpresas = ref([])

const openCreateUpdateModal = ref(false)

const itemUpdate = ref()

onMounted(() => {
    // dataEmpresas.value = query.data.value
    dataInternacionalizacion.value = queryInternacionalizacion.data.value
})

watchEffect(() => {
    // dataEmpresas.value = query.data.value
    dataInternacionalizacion.value = queryInternacionalizacion.data.value
})

const openModalToCreate = () => {
    console.log('click');
    openCreateUpdateModal.value = true
    itemUpdate.value = null
}

const openModalToUpdate = (id: number) => {
    itemUpdate.value = id
}

const closeModal = () => {
    openCreateUpdateModal.value = false
}


watch(itemUpdate, (newValue) => {
    itemUpdate.value = newValue
    openCreateUpdateModal.value = true
})

</script>

<style scoped></style>
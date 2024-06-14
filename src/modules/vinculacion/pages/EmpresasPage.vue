import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue';
<template>
    <DashboardLayout>
        <div class="flex justify-between">
            <div>
                <h2 class="text-2xl font-bold">Empresas</h2>
            </div>
            <div>
                <button class="px-4 py-2 text-white bg-blue-500 rounded-lg h-10 " @click="openCreateModal = true">Crear empresa</button>
            </div>
        </div>
        <div>
            <CustomDataTable :data="query.data.value" />
        </div>
    </DashboardLayout>
    <CreateEmpresa :open="openCreateModal" @close="closeModal" />
</template>

<script setup lang="ts">
import CustomDataTable from '@/components/CustomDataTable.vue';
import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue';
import CreateEmpresa from '../components/CreateEmpresa.vue';

import { useGetEmpresas } from '../composables/use-empresas';
import { onMounted, ref, watchEffect } from 'vue';

const query = useGetEmpresas()

const dataEmpresas = ref([])

const openCreateModal = ref(false)

onMounted(() => {
    dataEmpresas.value = query.data.value
    console.log(query.data.value)
})

watchEffect(() => {
    dataEmpresas.value = query.data.value
    console.log(query.data.value)
})

const closeModal = () => {
    openCreateModal.value = false
}

</script>

<style scoped></style>
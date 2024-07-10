<template>
    <DashboardLayout>
        <div>
            <h1 class="text-2xl font-normal dark:text-white">Biblioteca<small
                    class="ms-1 text-gray-400 dark:text-gray-300"> - Datos Históricos</small></h1>
            <br />
            <!-- Datos Historicos -->
            <DataTableButton :data="query.data.value?.historicos" :dominio="query.data.value?.dominio"/>
            <br />
        </div>
    </DashboardLayout>
</template>

<script setup lang="ts">
import DataTableButton from '../componentes/CustomDataTableButton.vue'
import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue';
import { useGetHistoricoBiblioteca } from '../composables/use-biblioteca';

const query = useGetHistoricoBiblioteca();


</script>

<style scoped></style>
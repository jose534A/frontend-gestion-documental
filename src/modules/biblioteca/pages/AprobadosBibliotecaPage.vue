<template>
    <DashboardLayout>
        <div>
            <h1 class="text-2xl font-normal dark:text-white">Biblioteca<small
                    class="ms-1 text-gray-400 dark:text-gray-300"> - Aprobados</small></h1>
            <br />
            <!-- Datos Aprobados -->
            <DataTableVista :data="query.data.value?.aprobados" :dominio="query.data.value?.dominio"/>
            <br />
        </div>
    </DashboardLayout>
</template>

<script setup lang="ts">
import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue';
import DataTableVista from '../componentes/CustomDataTableView.vue'
import { useGetAprobadosBiblioteca } from '../composables/use-biblioteca';
const query = useGetAprobadosBiblioteca();

</script>

<style scoped></style>
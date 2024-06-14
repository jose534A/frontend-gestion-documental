<template>
    <div v-if="open"
        class="fixed top-0 left-0 sm:ml-32 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50" @click="closeModal">
        
        <div class="bg-white rounded shadow-lg max-w-[400px] min-w-[350px]" @click.stop>
            <div class="px-4 py-2 flex justify-between items-center">
                <h2 class="text-xl">Crear nueva empresa</h2>
                <button @click="closeModal" class="text-lg">X</button>
            </div>
            <div class="p-4">
                <form @submit.prevent="addEmpresa">
                    <div class="mb-4">
                        <label class="block mb-2">Nombre de la empresa</label>
                        <input v-model="empresa.VINE_NOMBRE" type="text" class="w-full px-3 py-2 border rounded"
                            required>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2">Correo</label>
                        <input v-model="empresa.VINE_CORREO" type="text" class="w-full px-3 py-2 border rounded"
                            required>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2">Teléfono</label>
                        <input v-model="empresa.VINE_TELEFONO" type="text" class="w-full px-3 py-2 border rounded"
                            required>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2">Contacto</label>
                        <input v-model="empresa.VINE_CONTACTO" type="text" class="w-full px-3 py-2 border rounded"
                            required>
                    </div>
                    <!-- <div class="mb-4">
                        <label class="block mb-2">Estado</label>
                        <input v-model="empresa.VINE_ESTADO" type="number" class="w-full px-3 py-2 border rounded"
                            required>
                    </div> -->
                    <div class="mb-4">
                        <label class="block mb-2">Sector Económico</label>
                        <input v-model="empresa.VINE_SECTOR_ECONOMICO" type="number" class="w-full px-3 py-2 border rounded"
                            required>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2">Tipo</label>
                        <input v-model="empresa.VINE_TIPO" type="number" class="w-full px-3 py-2 border rounded"
                            required>
                    </div>
                    <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded">Crear</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { EmpresaDto } from '../dto/empresa.dto';
import { usePostEmpresa } from '../composables/use-empresas';
import { useQueryClient } from '@tanstack/vue-query';

const queryClient = useQueryClient()

const empresa = ref<EmpresaDto>({
    VINE_NOMBRE: '',
    VINE_CORREO: '',
    VINE_TELEFONO: '',
    VINE_CONTACTO: ''
});

defineProps({
    open: {
        type: Boolean,
        default: false
    }
})


const emit = defineEmits(['close'])

const mut = usePostEmpresa()


const addEmpresa = async () => {
    console.log(empresa.value)
    await mut.mutateAsync(empresa.value)
    if(mut.isSuccess) {
        emit('close')
        queryClient.invalidateQueries({ queryKey: ['empresas'] })
    }else{
        alert('Error al crear la empresa')
    }
}

const closeModal = () => {
    emit('close')
}
</script>

<style scoped></style>
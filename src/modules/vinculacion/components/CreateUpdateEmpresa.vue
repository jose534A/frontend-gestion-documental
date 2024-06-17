<template>
    <div v-if="open"
        class="fixed top-0 left-0 sm:ml-32 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
        @click="closeModal">

        <div class="bg-white rounded shadow-lg max-w-[400px] min-w-[350px] max-h-[500px] overflow-auto" @click.stop>
            <div class="px-4 py-2 flex justify-between items-center">
                <h2 class="text-xl">Crear nueva empresa</h2>
                <button @click="closeModal" class="bg-red-400 rounded-xl px-3 py-2 text-xs text-slate-100">Cerrar</button>
            </div>
            <div class="p-4">
                <form @submit.prevent="addEmpresa">
                    <div class="mb-4">
                        <label class="block mb-2" for="nameCorp">Nombre de la empresa</label>
                        <input v-model="empresa.VINE_NOMBRE" id="nameCorp" type="text" class="w-full px-3 py-2 border rounded"
                            required>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2" for="emailCorp">Correo</label>
                        <input v-model="empresa.VINE_CORREO" id="emailCorp" type="text" class="w-full px-3 py-2 border rounded"
                            required>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2" for="phoneCorp">Teléfono</label>
                        <input v-model="empresa.VINE_TELEFONO" id="phoneCorp" type="text" class="w-full px-3 py-2 border rounded"
                            required>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2" for="contactCorp">Contacto</label>
                        <input v-model="empresa.VINE_CONTACTO" id="contactCorp" type="text" class="w-full px-3 py-2 border rounded"
                            required>
                    </div>
                    <!-- <div class="mb-4">
                        <label class="block mb-2">Estado</label>
                        <input v-model="empresa.VINE_ESTADO" type="number" class="w-full px-3 py-2 border rounded"
                            required>
                    </div> -->
                    <div class="mb-4">
                        <label class="block mb-2" for="economicSectorCorp">Sector Económico</label>
                        <input v-model="empresa.VINE_SECTOR_ECONOMICO" id="economicSectorCorp" type="number"
                            class="w-full px-3 py-2 border rounded" required>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2" for="typeCorp">Tipo</label>
                        <input v-model="empresa.VINE_TIPO" id="typeCorp" type="number" class="w-full px-3 py-2 border rounded"
                            required>
                    </div>
                    <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded">Crear</button>
                </form>
                <pre>{{ itemUpdate }}</pre>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref, watch } from 'vue';
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

const { itemUpdate, open } = defineProps({
    open: {
        type: Boolean,
        default: false
    },
    itemUpdate: {
        type: Number,
        default: null,
        required: false
    }
})

watch(() => open, (newValue) => {
    console.log('watch', { open, itemUpdate, newValue })
})

onBeforeMount(() => {
    console.log('onBeforeMount', { open, itemUpdate })
})

onMounted(() => {
    console.log('onMounted', { open, itemUpdate })
})

const emit = defineEmits(['close'])

const mut = usePostEmpresa()

const addEmpresa = async () => {
    console.log(empresa.value)
    await mut.mutateAsync(empresa.value)
    if (mut.isSuccess) {
        emit('close')
        queryClient.invalidateQueries({ queryKey: ['empresas'] })
    } else {
        alert('Error al crear la empresa')
    }
}

const closeModal = () => {
    emit('close')
}

</script>

<style scoped></style>
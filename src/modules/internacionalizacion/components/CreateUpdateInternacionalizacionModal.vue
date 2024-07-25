<template>
    <!-- Main modal -->
    <div v-if="open"
        class="fixed top-0 left-0 sm:ml-16  flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
        @click="closeModal">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="bg-white rounded shadow-lg max-w-[900px] min-w-[550px] max-h-[700px] overflow-auto" @click.stop>
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Agregar
                    </h3>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="crud-modal" @click="closeModal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <form class="p-4 md:p-5" @submit.prevent="onSubmit">
                    <div class="grid gap-4 mb-4 grid-cols-2">

                        <!--  -->
                        <div class="col-span-2 sm:col-span-1">
                            <label for="sede-nombre"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sede</label>
                            <select v-model="internacionalizacionItem.SEDE_NOMBRE" id="sede-nombre"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option v-for="sede in queryInterSede.data.value" :key="sede.SEDE_ID"
                                    :value="sede.SEDE_ID">{{ sede.SEDE_NOMBRE }}</option>
                            </select>
                        </div>
                        <!--  -->


                        <!--  -->
                        <div class="col-span-2 sm:col-span-1">
                            <label for="icar-codigo"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo de
                                Carrera</label>
                            <select v-model="internacionalizacionItem.ICAR_CODIGO" id="icar-codigo"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option v-for="carrera in queryIntercarrera.data.value" :key="carrera.CAR_ID"
                                    :value="carrera.CAR_ID">{{ carrera.ICAR_CODIGO }}</option>
                            </select>
                        </div>
                        <!--  -->

                        <!--  -->
                        <div class="col-span-2">
                            <label for="pai-pais"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pais</label>
                            <select v-model="internacionalizacionItem.PAI_PAIS" id="pai-pais"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                <option v-for="pais in queryInterPais.data.value" :key="pais.PAI_ID" :value="pais.PAI_ID">{{ pais.PAI_PAIS }}</option>
                            </select>
                        </div>
                        <!--  -->

                        <!--  -->
                        <div class="col-span-2">
                            <label for="inter-conv-codigo"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo de Convenio
                                Internacional</label>
                                <input v-model="internacionalizacionItem.INTER_CONV_CODIGO" type="text"
                                name="inter-conv-nombre" id="inter-conv-nombre"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product inter-conv-nombre" required>
                        </div>
                        <!--  -->

                        <!--  -->
                        <div class="col-span-2">
                            <label for="inter-conv-nombre"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de
                                Convenio</label>
                            <input v-model="internacionalizacionItem.INTER_CONV_NOMBRE" type="text"
                                name="inter-conv-nombre" id="inter-conv-nombre"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product inter-conv-nombre" required>
                        </div>
                        <!--  -->

                        <!--  -->
                        <div class="col-span-2">
                            <label for="inter-contraparte"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraparte
                                internacional</label>
                            <input v-model="internacionalizacionItem.INTER_CONTRAPARTE" type="text"
                                name="inter-contraparte" id="inter-contraparte"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product inter-contraparte" required>
                        </div>
                        <!--  -->



                        <!--  -->
                        <div class="col-span-2">
                            <label for="ptip-tipo"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo
                                del movilizado del participante</label>
                            <select v-model="internacionalizacionItem.PTIP_TIPO" id="ptip-tipo"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                <option v-for="tipo in queryInterTipoParticipante.data.value" :key="tipo.PTIP_ID" :value="tipo.PTIP_ID">{{ tipo.PTIP_TIPO }}</option>
                            </select>
                        </div>
                        <!--  -->

                        <!--  -->
                        <div class="col-span-2">
                            <label for="inter-apellido"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos del
                                movilizado participante</label>
                            <input v-model="internacionalizacionItem.INTER_PAPELLIDO" type="text" name="inter-apellido"
                                id="inter-apellido"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product inter-apellido" required>
                        </div>
                        <!--  -->

                        <!--  -->
                        <div class="col-span-2">
                            <label for="inter-pnombre"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres del
                                movilizado participante</label>
                            <input v-model="internacionalizacionItem.INTER_PNOMBRE" type="text" name="inter-pnombre"
                                id="inter-pnombre"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product inter-pnombre" required>
                        </div>
                        <!--  -->

                        <!--  -->
                        <div class="col-span-2">
                            <label for="inter-actividades"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Actividades</label>
                            <textarea v-model="internacionalizacionItem.INTER_ACTIVIDADES" id="inter-actividades" rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write your thoughts here..."></textarea>
                        </div>
                        <!--  -->

                        <!--  -->
                        <div class="col-span-2 sm:col-span-1">
                            <label for="inter-finicio"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha
                                de Inicio</label>
                            <input v-model="internacionalizacionItem.INTER_FINICIO" type="date" name="inter-finicio"
                                id="inter-finicio"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product inter-finicio" required>
                        </div>
                        <!--  -->

                        <!--  -->
                        <div class="col-span-2 sm:col-span-1">
                            <label for="inter-ffin"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha
                                de Finalizacion</label>
                            <input v-model="internacionalizacionItem.INTER_FFIN" type="date" name="inter-ffin"
                                id="inter-ffin"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product inter-ffin" required>
                        </div>
                        <!--  -->

                        <!--  -->
                        <div class="col-span-2">
                            <label for="are-codigo"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area
                                de Conocimiento</label>
                            <select v-model="internacionalizacionItem.ARE_CODIGO" id="are-codigo"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                <option v-for="area in queryInterAreaConocimiento.data.value" :key="area.ARE_ID" :value="area.ARE_ID">
                                    {{ area.ARE_CODIGO }}: {{ area.ARE_DESCRIPCION }}
                                </option>
                            </select>
                        </div>
                        <!--  -->

                        <!--  -->
                        <div class="col-span-2">
                            <label for="fin-tipo"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Financiamiento</label>
                            <select v-model="internacionalizacionItem.FIN_TIPO" id="fin-tipo"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                <option v-for="financiamiento in queryInterFinanciamiento.data.value" :key="financiamiento.FIN_ID" :value="financiamiento.FIN_ID" >{{ financiamiento.FIN_TIPO }}</option>
                            </select>
                        </div>
                        <!--  -->

                        <!--  -->
                        <div class="col-span-2">
                            <label for="inter-evidencia"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Evidencia</label>
                            <input v-model="internacionalizacionItem.INTER_EVIDENCIA" type="text" name="inter-evidencia"
                                id="inter-evidencia"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product inter-evidencia" required>
                        </div>
                        <!--  -->



                        <!-- CheckBox -->

                        <div class="col-span-2">

                            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Indicadores</h3>
                            <ul
                                class=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center ps-3">
                                        <input v-model="internacionalizacionItem.INTER_ADOCENCIA" id="docencia-checkbox"
                                            type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="docencia-checkbox"
                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Docencia</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center ps-3">
                                        <input v-model="internacionalizacionItem.INTER_AINVESTIGACION"
                                            id="investigacion-checkbox" type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="investigacion-checkbox"
                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Investigacion</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center ps-3">
                                        <input v-model="internacionalizacionItem.INTER_AVINCULACION"
                                            id="vinculacion-checkbox" type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="vinculacion-checkbox"
                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vinculación</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center ps-3">
                                        <input v-model="internacionalizacionItem.INTER_AADMINISTRATIVO"
                                            id="desarrollo-docente-administrativo-checkbox" type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="desarrollo-docente-administrativo-checkbox"
                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Desarrollo
                                            Docente Administrativo</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center ps-3">
                                        <input v-model="internacionalizacionItem.INTER_AINTERNACIONALIZACION"
                                            id="internacionalizacion-checkbox" type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="internacionalizacion-checkbox"
                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Internacionalizacion</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!--  -->

                        <!-- CheckBox -->

                        <div class="col-span-2">

                            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Aporte a funcion sustantiva
                            </h3>
                            <ul
                                class=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center ps-3">
                                        <input v-model="internacionalizacionItem.INTER_INDICADOR_1" id="ind-1-checkbox"
                                            type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="ind-1-checkbox"
                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ind-1</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center ps-3">
                                        <input v-model="internacionalizacionItem.INTER_INDICADOR_2" id="ind-2-checkbox"
                                            type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="ind-2-checkbox"
                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ind-2</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center ps-3">
                                        <input v-model="internacionalizacionItem.INTER_INDICADOR_3" id="ind-3-checkbox"
                                            type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="ind-3-checkbox"
                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ind-3</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center ps-3">
                                        <input v-model="internacionalizacionItem.INTER_INDICADOR_4" id="ind-4-checkbox"
                                            type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="ind-4-checkbox"
                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ind-4</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center ps-3">
                                        <input v-model="internacionalizacionItem.INTER_INDICADOR_5" id="ind-5-checkbox"
                                            type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="ind-5-checkbox"
                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ind-5</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center ps-3">
                                        <input v-model="internacionalizacionItem.INTER_INDICADOR_6" id="ind-6-checkbox"
                                            type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="ind-6-checkbox"
                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ind-6</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center ps-3">
                                        <input v-model="internacionalizacionItem.INTER_INDICADOR_7" id="ind-7-checkbox"
                                            type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="ind-7-checkbox"
                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ind-7</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center ps-3">
                                        <input v-model="internacionalizacionItem.INTER_INDICADOR_8" id="ind-8-checkbox"
                                            type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="ind-8-checkbox"
                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ind-8</label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center ps-3">
                                        <input v-model="internacionalizacionItem.INTER_INDICADOR_9" id="ind-9-checkbox"
                                            type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="ind-9-checkbox"
                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ind-9</label>
                                    </div>
                                </li>


                            </ul>
                        </div>
                        <!--  -->



                    </div>
                    <button type="submit"
                        class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        Agregar Internacionalizacion
                    </button>
                </form>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';
import type { InternacionalizacionDto } from '../dto/internacionalizacion.dto';
import { useQueryClient } from '@tanstack/vue-query';
import { useGetInternacionalizacionByIdNoQuery, usePostInternacionalizacion, usePutInternacionalizacion } from '../composables/use-internacionalizacion';
import { useGetIntersedesQuery } from '../composables/use-intersedes';
import { useGetInterCarreraQuery } from '../composables/use-intercarrera';
import { useGetInterPaisQuery } from '../composables/use-pais';
import { useGetInterTipoParticipanteQuery } from '../composables/use-intertipoparticipante';
import { useGetInterAreasConocimiento } from '../composables/use-interareasconocimiento';
import { useGetInterFinanciamiento } from '../composables/use-interfinanciamiento';

const queryClient = useQueryClient()

const queryInterSede = useGetIntersedesQuery()
const queryIntercarrera = useGetInterCarreraQuery()
const queryInterPais = useGetInterPaisQuery()
const queryInterTipoParticipante = useGetInterTipoParticipanteQuery()
const queryInterAreaConocimiento = useGetInterAreasConocimiento()
const queryInterFinanciamiento = useGetInterFinanciamiento()

const internacionalizacionObjEmpty: InternacionalizacionDto = {
    INTER_ID: 0,
    SEDE_NOMBRE: '',
    ICAR_CODIGO: '',
    INTER_CONV_CODIGO: '',
    INTER_CONV_NOMBRE: '',
    INTER_CONTRAPARTE: '',
    PAI_PAIS: '',
    PTIP_TIPO: '',
    INTER_PAPELLIDO: '',
    INTER_PNOMBRE: '',
    INTER_ACTIVIDADES: '',
    ARE_CODIGO: '',
    FIN_TIPO: '',
    INTER_ADOCENCIA: '',
    INTER_AINVESTIGACION: '',
    INTER_AVINCULACION: '',
    INTER_AADMINISTRATIVO: '',
    INTER_AINTERNACIONALIZACION: '',
    INTER_EVIDENCIA: '',
}

const internacionalizacionItem = ref<InternacionalizacionDto>(internacionalizacionObjEmpty);

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
        internacionalizacionItem.value = await useGetInternacionalizacionByIdNoQuery(props.itemUpdate)
    } else {
        internacionalizacionItem.value = internacionalizacionObjEmpty
    }
    console.log({...internacionalizacionItem.value});
})

watchEffect(() => {
    internacionalizacionItem.value.INTER_ADOCENCIA === 'X' ? true : false
    internacionalizacionItem.value.INTER_AINVESTIGACION === 'X' ? true : false
    internacionalizacionItem.value.INTER_AVINCULACION === 'X' ? true : false
    internacionalizacionItem.value.INTER_AADMINISTRATIVO === 'X' ? true : false
    internacionalizacionItem.value.INTER_AINTERNACIONALIZACION === 'X' ? true : false

    internacionalizacionItem.value.INTER_INDICADOR_1 === 'X' ? true : false
    internacionalizacionItem.value.INTER_INDICADOR_2 === 'X' ? true : false
    internacionalizacionItem.value.INTER_INDICADOR_3 === 'X' ? true : false
    internacionalizacionItem.value.INTER_INDICADOR_4 === 'X' ? true : false
    internacionalizacionItem.value.INTER_INDICADOR_5 === 'X' ? true : false
    internacionalizacionItem.value.INTER_INDICADOR_6 === 'X' ? true : false
    internacionalizacionItem.value.INTER_INDICADOR_7 === 'X' ? true : false
    internacionalizacionItem.value.INTER_INDICADOR_8 === 'X' ? true : false
    internacionalizacionItem.value.INTER_INDICADOR_9 === 'X' ? true : false
})

const emit = defineEmits(['close'])

const mutationCreate = usePostInternacionalizacion()
const mutationUpdate = usePutInternacionalizacion()

const addInternacionalizacion = async () => {

    await mutationCreate.mutateAsync(internacionalizacionItem.value)
    if (mutationCreate.isSuccess) {
        emit('close')
        queryClient.invalidateQueries({ queryKey: ['empresas'] })
    } else {
        alert('Error al crear la empresa')
    }
}

const updateInternacionalizacion = async () => {
    internacionalizacionItem.value.INTER_ID = props.itemUpdate
    await mutationUpdate.mutateAsync(internacionalizacionItem.value)
    if (mutationUpdate.isSuccess) {
        emit('close')
        queryClient.invalidateQueries({ queryKey: ['empresas'] })
    } else {
        alert('Error al crear la empresa')
    }

}

const onSubmit = () => {
    internacionalizacionItem.value.INTER_ADOCENCIA = internacionalizacionItem.value.INTER_ADOCENCIA ? 'X' : ''
    internacionalizacionItem.value.INTER_AINVESTIGACION = internacionalizacionItem.value.INTER_AINVESTIGACION ? 'X' : ''
    internacionalizacionItem.value.INTER_AVINCULACION = internacionalizacionItem.value.INTER_AVINCULACION ? 'X' : ''
    internacionalizacionItem.value.INTER_AADMINISTRATIVO = internacionalizacionItem.value.INTER_AADMINISTRATIVO ? 'X' : ''
    internacionalizacionItem.value.INTER_AINTERNACIONALIZACION = internacionalizacionItem.value.INTER_AINTERNACIONALIZACION ? 'X' : ''

    internacionalizacionItem.value.INTER_INDICADOR_1 = internacionalizacionItem.value.INTER_INDICADOR_1 ? 'X' : ''
    internacionalizacionItem.value.INTER_INDICADOR_2 = internacionalizacionItem.value.INTER_INDICADOR_2 ? 'X' : ''
    internacionalizacionItem.value.INTER_INDICADOR_3 = internacionalizacionItem.value.INTER_INDICADOR_3 ? 'X' : ''
    internacionalizacionItem.value.INTER_INDICADOR_4 = internacionalizacionItem.value.INTER_INDICADOR_4 ? 'X' : ''
    internacionalizacionItem.value.INTER_INDICADOR_5 = internacionalizacionItem.value.INTER_INDICADOR_5 ? 'X' : ''
    internacionalizacionItem.value.INTER_INDICADOR_6 = internacionalizacionItem.value.INTER_INDICADOR_6 ? 'X' : ''
    internacionalizacionItem.value.INTER_INDICADOR_7 = internacionalizacionItem.value.INTER_INDICADOR_6 ? 'X' : ''
    internacionalizacionItem.value.INTER_INDICADOR_8 = internacionalizacionItem.value.INTER_INDICADOR_6 ? 'X' : ''
    internacionalizacionItem.value.INTER_INDICADOR_9 = internacionalizacionItem.value.INTER_INDICADOR_6 ? 'X' : ''

    console.log({...internacionalizacionItem.value});
    // if (props.itemUpdate) {
    //     updateInternacionalizacion()
    // } else {
    //     addInternacionalizacion()
    // }
}

const closeModal = () => {
    internacionalizacionItem.value = internacionalizacionObjEmpty
    emit('close')
}
</script>

<style scoped></style>
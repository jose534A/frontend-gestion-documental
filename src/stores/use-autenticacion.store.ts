import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAutenticacionStore = defineStore('autenticacion', () => {
    const loginStatus = ref(false)
    const nombre = ref('')
    const rolId = ref(-1)

    const showModal = ref(false)
    const messageError = ref('')
    const titleError = ref('')

    const onLogginSuccess = (
        success: boolean,
        nombreParam?: string,
        rolIdParam?: number,
        message?: string
    ) => {
        if (success === true) {
            console.log('Success')
            loginStatus.value = true
            nombre.value = nombreParam ? nombreParam : ''
            rolId.value = rolIdParam ? rolIdParam : -1
            localStorage.setItem('auth/isAuthenticated', 'true')
            localStorage.setItem('auth/nombre', nombre.value)
            // console.log('loginStatus', loginStatus.value)
        } else {
            console.log('Fail')
            showModal.value = true
            messageError.value = message ?? '-'
            titleError.value = 'Error'
            loginStatus.value = false
        }
    }

    const onLogginError = (error? : string) => {
        showModal.value = true
        messageError.value = error ? error : 'Error al iniciar sesión',
        titleError.value = 'Error'
        loginStatus.value = false
    }
    const closeModal = () => {
        showModal.value = false
    }

    return {
        // state
        loginStatus,
        nombre,
        rolId,
        showModal,
        messageError,
        titleError,
        // actions
        onLogginSuccess, onLogginError, closeModal
    }
})
// export const useAutenticacionStore = defineStore('autenticacion',{
//     state: () => ({
//         loginStatus: false,
//         nombre: '',
//         rolId: -1,
//         //
//         showModal: false,
//         messageError: '',
//         titleError: ''
//     }),
//     actions: {
//         onLogginSuccess(success: boolean, nombre?: string, rolId?: number, message?: string){
//             console.log({success, nombre, rolId, message })
//             if(success === true){
//                 console.log("Success")
//                 this.loginStatus = true
//                 this.nombre = nombre ? nombre : ''
//                 this.rolId = rolId ? rolId : -1
//                 // localStorage.setItem('auth/isAuthenticated', 'true')
//             }else{
//                 console.log("Fail")
//                 this.showModal = true
//                 this.messageError = message ?? '-'
//                 this.titleError = 'Error'
//                 this.loginStatus = false
//             }
//         },
//         onLogginError(error: any){
//             this.showModal = true
//             this.messageError = error ? error.message : 'Error desconocido',
//             this.titleError = 'Error on loggin error'
//             this.loginStatus = false
//         },
//         closeModal(){
//             this.showModal = false
//         }
//     }
// })

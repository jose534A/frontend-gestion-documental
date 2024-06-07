import { defineStore } from 'pinia'


export const useAutenticacionStore = defineStore('autenticacion',{
    state: () => ({
        loginStatus: false,
        nombre: '',
        rolId: -1,
        // 
        showModal: false,
        messageError: '',
        titleError: ''
    }),
    actions: {
        onLogginSuccess(success: boolean, nombre?: string, rolId?: number, message?: string){
            console.log({success, nombre, rolId, message })
            if(success === true){
                console.log("Success")
                this.loginStatus = true
                this.nombre = nombre ? nombre : ''
                this.rolId = rolId ? rolId : -1
                // localStorage.setItem('auth/isAuthenticated', 'true')
            }else{
                console.log("Fail")
                this.showModal = true
                this.messageError = message ?? '-'
                this.titleError = 'Error'
                this.loginStatus = false
            }
        },
        onLogginError(error: any){
            this.showModal = true
            this.messageError = error ? error.message : 'Error desconocido',
            this.titleError = 'Error on loggin error'
            this.loginStatus = false
        },
        closeModal(){
            this.showModal = false
        }
    }
})

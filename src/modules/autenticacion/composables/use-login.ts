// import { useApi } from "@/composables/use-api"
import { useMutation } from '@tanstack/vue-query'
import type { LoginDto } from '../dto/login.dto'
import type { LoginResponseDto } from '../dto/login-response.dto'
import { useApi } from '@/composables/use-api'

export const useLogin = () => {
    const mutation = useMutation({
        mutationFn: async (data: LoginDto) => {
            const response = await useApi.post<LoginResponseDto>('login', {
                username: data.username,
                password: data.password,
                apiKey: 'documental',
                apiSecret: 'Documental2021file'
            })
            if (!response.data.success) throw Error(response.data.message)
            return response.data
        }
    })
    return mutation
}

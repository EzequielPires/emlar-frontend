import { api } from "./api"

export const signInRequest = async (email, password) => {
    const user = await api.post('/auth/login', {
        email: email,
        password: password
    });
    if(!user.data.success) {
        return {
            user: null,
            token: null
        }
    }
    return {
        user: user.data.user,
        token: user.data.token
    }
}
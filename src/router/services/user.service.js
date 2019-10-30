
import ApiService from './api.service'
import { TokenService } from './storage.service'


class AuthenticationError extends Error {
    constructor(errorCode, message) {
        super(message)
        this.name = this.constructor.name
        this.message = message
        this.errorCode = errorCode
    }
}

const UserService = {
    /**
     * Login the user and store the access token to TokenService. 
     * 
     * @returns access_token
     * @throws AuthenticationError 
     **/
    login: async function(email, password) {
        console.log('dubmit3', email, password);
        const requestData = {
            method: 'post',
            url: "/login/",
            data: {
                email: email,
                password: password
            }
        }
        try {
            console.log('try block ...')
            const response = await ApiService.customRequest(requestData)
            console.log('submit 5', response)
            TokenService.saveToken(response.data.token)
            TokenService.saveRefreshToken(response.data.refreshToken)
            ApiService.setHeader()

            // NOTE: We haven't covered this yet in our ApiService 
            //       but don't worry about this just yet - I'll come back to it later
            ApiService.mount401Interceptor();

            return response.data.token
        } catch (error) {
            throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    /**
     * Refresh the access token.
     **/
    refreshToken: async function() {
        const refreshToken = TokenService.getRefreshToken()

        const requestData = {
            method: 'post',
            url: "/token/",
            data: {
                grant_type: 'refreshToken',
                refreshToken: refreshToken
            }
            // },
            // auth: {
            //     username: process.env.VUE_APP_CLIENT_ID,
            //     password: process.env.VUE_APP_CLIENT_SECRET
            // }
        }

        try {
            const response = await ApiService.customRequest(requestData)
            console.log('submit 6', response.data)
            TokenService.saveToken(response.data.token)
            TokenService.saveRefreshToken(response.data.refreshToken)
                // Update the header in ApiService
            ApiService.setHeader()

            return response.data.access_token
        } catch (error) {
            throw new AuthenticationError(error.response.status, error.response.data.detail)
        }

    },

    /**
     * Logout the current user by removing the token from storage. 
     * 
     * Will also remove `Authorization Bearer <token>` header from future requests.
     **/
    logout() {
        // Remove the token and remove Authorization header from Api Service as well 
        TokenService.removeToken()
        TokenService.removeRefreshToken()
        ApiService.removeHeader()

        // NOTE: Again, we'll cover the 401 Interceptor a bit later. 
        ApiService.unmount401Interceptor()
    }
}

export default UserService

export { UserService, AuthenticationError }
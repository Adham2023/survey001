import { UserService, AuthenticationError } from '@/router/services/user.service'
import { TokenService } from '@/router/services/storage.service'
import router from '@/router'


const state = {
    authenticating: false,
    accessToken: TokenService.getToken(),
    authenticationErrorCode: 0,
    authenticationError: '',
    refreshTokenPromise: null // Holds the promise of the refresh toekn
}

const getters = {
    loggedIn: (state) => {
        return state.accessToken ? true : false
    },

    authenticationErrorCode: (state) => {
        return state.authenticationErrorCode
    },

    authenticationError: (state) => {
        return state.authenticationError
    },

    authenticating: (state) => {
        return state.authenticating
    },
    accessToken: (state) => {
        return state.accessToken;
    }
}

const actions = {
    async login({ commit }, { email, password }) {
        console.log('submit2', email, password)
        commit('loginRequest');

        try {
            const token = await UserService.login(email, password);
            console.log("token galdi")
            commit('loginSuccess', token)
                // Redirect the user to the page he first tried to visit or to the home view
            console.log("redirect begin")
            router.push(router.history.current.query.redirect || '/');
            console.log("redirect end")
            return true
        } catch (e) {
            if (e instanceof AuthenticationError) {
                commit('loginError', { errorCode: e.errorCode, errorMessage: e.message })
            }

            return false
        }
    },

    logout({ commit }) {
        UserService.logout()
        commit('logoutSuccess')
        router.push('/login')
    },

    refreshToken({ commit, state }) {
        // If this is the first time the refreshToken has been colled, make a rewuest
        // Otherwise return the same promise to the caller
        if (!state.refreshTokenPromise) {
            const p = UserService.refreshToken()
            commit('refreshTokenPromise', p)

            // Wait for the UserService.refreshToken() to resolve. On success set the tken and clear promise
            // Clear the prromise on error as well.
            p.then(
                response => {
                    commit('refreshTokenPromise', null)
                    commit('loginSuccess', response)
                },
                error => {
                    commit('refreshTokenPromise', null)
                }
            )
        }

        return state.refreshTokenPromise
    }
}

const mutations = {
    loginRequest(state) {
        state.authenticating = true;
        state.authenticationError = ''
        state.authenticationErrorCode = 0
    },

    loginSuccess(state, accessToken) {
        state.accessToken = accessToken
        state.authenticating = false;
    },

    loginError(state, { errorCode, errorMessage }) {
        state.authenticating = false
        state.authenticationErrorCode = errorCode
        state.authenticationError = errorMessage
    },

    logoutSuccess(state) {
        state.accessToken = ''
    },
    refreshTokenPromise(state, promise) {
        state.refreshTokenPromise = promise
    }
}

export const auth = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}